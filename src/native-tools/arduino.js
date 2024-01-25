const { spawn, exec } = require("child_process");
const fs = require("fs");
const { clipboard } = require("electron");
const {cliConfigFile, arduinoBasePath, arduinoCommand, compileFilePath, execCli} = require('./utils')

const verifyCode = ({ code, board }) => {
  const { upload_arg } = board;
  fs.writeFileSync(compileFilePath, code);

  return execCli({command: `compile -b ${upload_arg} ${compileFilePath}`, json: true})
};
module.exports = {
  "arduino.board.list": () => {
    return new Promise((resolve, reject) => {
      const arduinoProcess = spawn(arduinoCommand, [
        "--config-file",
        cliConfigFile,
        "board",
        "list",
        "--format",
        "json",
      ]);
      arduinoProcess.stdout.on("data", (data) =>
        resolve(data.toString("utf-8"))
      );
      arduinoProcess.stderr.on("data", (data) => reject(data));
    });
  },
  "arduino.code.verify": async (_, { code, board }) =>
    verifyCode({ code, board }),
  "arduino.code.upload": async (_, { code, board, port }) => {
    const verifyResult = await verifyCode({ code, board });
    console.log(verifyResult);
    if (!verifyResult.success)
      return Promise.resolve({
        ...verifyResult,
        stage: "verify",
        success: false,
      });
    const { upload_arg } = board;
    return execCli({command: `upload -b ${upload_arg} --port ${port.label} ${compileFilePath}`, json: true})
  },
  "arduino.code.copy": async (_, code) => clipboard.writeText(code),
};
