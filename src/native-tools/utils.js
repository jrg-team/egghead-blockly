const path = require("path");
const { exec } = require("child_process");

const isDevelopment = process.env.NODE_ENV === "development";
const compilationPath = isDevelopment
  ? path.join(__dirname, "../../compilation")
  : process.resourcesPath;
const arduinoBasePath = path.join(compilationPath, "./arduino");
const arduinoCommand = path.join(compilationPath, "./bin/arduino-cli");
const compileFilePath = path.join(arduinoBasePath, "./sketch/sketch.ino");
const downloadPackedLibPath = path.join(
  arduinoBasePath,
  "packed-libraries.zip"
);
const packedLibInstallFileFlag = path.join(arduinoBasePath, 'lib-installed')
const cliConfigFile = path.join(
  compilationPath,
  "./arduino/configuration/arduino-cli.yaml"
);
const arduinoDirectories = {
  data: path.join(compilationPath, "./arduino/storage/data"),
  downloads: path.join(compilationPath, "./arduino/storage/downloads"),
  user: path.join(compilationPath, "./arduino/storage/user"),
};

const execCli = (config) => {
  if (!config) throw new Error("argument cannot be blank");
  const { json = true, command } = config;
  if (!command) throw new Error("command cannot be blank");
  const cmd = `${arduinoCommand} --config-file ${cliConfigFile} ${command} ${
    json ? "--format json" : ""
  }`;
  return new Promise((resolve) => {
    exec(cmd, { cwd: arduinoBasePath }, (error, stdout, stderr) => {
      if (error) console.log(error);
      resolve(json ? JSON.parse(stdout) : stdout);
    });
  });
};

module.exports = {
  isDevelopment,
  compilationPath,
  arduinoBasePath,
  arduinoCommand,
  compileFilePath,
  downloadPackedLibPath,
  packedLibInstallFileFlag,
  cliConfigFile,
  arduinoDirectories,
  execCli,
};
