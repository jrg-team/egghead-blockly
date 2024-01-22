const { spawn, exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const {clipboard} = require('electron')

const arduinoBasePath =
  process.platform == "win32"
    ? "./compilation/arduino"
    : path.join(__dirname, "../../compilation/arduino");
const arduinoCommand = "arduino-cli";
const compileFilePath = `${arduinoBasePath}/sketch/sketch.ino`;

const verifyCode = ({ code, board }) => {
  const { upload_arg } = board;
  fs.writeFileSync(compileFilePath, code);

  return new Promise((resolve, reject) => {
    const cmd = `${arduinoCommand} compile -b ${upload_arg} ${compileFilePath} --format json`;
    exec(cmd, { cwd: arduinoBasePath }, (error, stdout, stderr) => {
      resolve(JSON.parse(stdout));
    });
  });
};
module.exports = {
  "arduino.board.list": () => {
    return new Promise((resolve, reject) => {
      const arduinoProcess = spawn(arduinoCommand, [
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
  "arduino.code.verify": async (event, { code, board }) => verifyCode({code, board}),
  "arduino.code.upload": async (event, { code, board, port }) => {
    const verifyResult = await verifyCode({code, board})
    if (!verifyResult.success) return verifyResult
    const {upload_arg} = board
    const cmd = `${arduinoCommand} upload -b ${upload_arg} --port ${port.label} ${compileFilePath} --format json`;
    exec(cmd, { cwd: arduinoBasePath }, (error, stdout, stderr) => {
      resolve(JSON.parse(stdout));
    });
  },
  "arduino.code.copy": async (event, code) => clipboard.writeText(code)
};
