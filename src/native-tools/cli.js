const fs = require("fs");
const path = require("path");
const YAML = require("yaml");
const {
  compilationPath,
  cliConfigFile,
  downloadPackedLibPath,
  arduinoBasePath,
  arduinoDirectories,
  packedLibInstallFileFlag,
  execCli,
} = require("./utils");
const libs = require("./lib-configs");
const { exec } = require("child_process");

const refreshCliConfigFile = () => {
  const fileContent = fs.readFileSync(cliConfigFile, "utf8");
  const yamlObj = YAML.parse(fileContent);
  yamlObj.directories = arduinoDirectories;
  fs.writeFileSync(cliConfigFile, YAML.stringify(yamlObj), {
    encoding: "utf8",
  });
};

const getInstallStatus = async () => {
  const totalLibSize = libs.length;
  const installedList = await execCli({ command: "lib list", json: true });
  const uninstalledList = libs.filter(
    (lib) =>
      !installedList.find(
        (installedLib) => installedLib.library.name === lib.name
      )
  );
  console.log(
    `\r\n ------- 共需${totalLibSize}个库， 已安装 ${installedList.length}，未安装 ${uninstalledList.length} -------\r\n`
  );
  console.log(` ------- 已安装 -------`);
  console.log(installedList.map((i) => i.library.name).join("\t"));
  console.log(`\r\n ------- 未安装 -------`);
  console.log(uninstalledList.map((l) => l.name).join("\n"));
  return {
    totalLibSize,
    installedList,
    uninstalledList,
  };
};

const libBatchInstall = (installList) => {
  const installOneLib = (lib) => {
    console.log(`⚡ installing: ${lib.name}`);
    return execCli({
      command: `lib install ${
        lib.zip
          ? `--zip-path ${lib.zip}`
          : lib.git
          ? `--git-url ${lib.git}`
          : `"${lib.name}"`
      }`,
      json: false,
    }).then((out) => console.log(out));
  };

  installList.reduce((promiseChain, lib) => {
    return promiseChain.then(() => installOneLib(lib));
  }, Promise.resolve());
};

const updateCliCore = () => {
  console.log("🔥 updating core index");
  return execCli({ command: `core update-index`, json: false });
};

const updateCliPlatform = async () => {
  console.log("🔥 check core arduino:avr");
  await execCli({ command: `core install arduino:avr`, json: false });
  console.log("🔥 check core esp32:esp32");
  await execCli({ command: `core install esp32:esp32`, json: false });
  return true;
};

const downloadPackedLibZip = () => {
  if (fs.existsSync(packedLibInstallFileFlag)) {
    return Promise.resolve();
  }
  if (fs.existsSync(downloadPackedLibPath)) {
    console.log(`👉 packed Libraries already downloaded`);
    return Promise.resolve();
  }
  const cmd = `curl -o ${downloadPackedLibPath} https://sciteen.oss-cn-hangzhou.aliyuncs.com/blockly-packed-lib.zip`;
  console.log(`👉 downloading packed Libraries zip file`);
  return new Promise((resolve, reject) => {
    exec(cmd, { cwd: arduinoBasePath }, (error, stdout, stderr) => {
      resolve(stdout);
    });
  });
};

const installPackedLib = async () => {
  if (fs.existsSync(packedLibInstallFileFlag)) {
    console.log(`👉 lib already installed, skip`);
    return true;
  }
  console.log(`👉 unzip and install packed lib`);
  const libPath = path.join(arduinoDirectories.user, "libraries");
  if (!fs.existsSync(libPath)) fs.mkdirSync(libPath, { recursive: true });
  const cmd = `unzip -d ${libPath} -o ${downloadPackedLibPath}`;
  await new Promise((resolve, reject) => {
    exec(cmd, { cwd: arduinoBasePath }, (error, stdout, stderr) => {
      console.log(error, stdout, stderr);
      resolve(stdout);
    });
  });
  fs.writeFileSync(packedLibInstallFileFlag, "installed");
  setTimeout(() => {
    fs.rmSync(downloadPackedLibPath, { force: true });
  }, 10000);
};

const checkLib = (config = { mode: "packed" }) => {
  if (config.mode === "cli") {
    console.log(`🚀 check libraries within Cli lib command`);
    // Version 1: use cli to install
    return updateCliCore()
      .then(getInstallStatus)
      .then(({ uninstalledList }) => libBatchInstall(uninstalledList))
      .then(updateCliCore);
  } else if (config.mode === "packed") {
    console.log(`🚀 check libraries within packed zip file`);
    // Version 2: use packed zip file
    return updateCliCore().then(downloadPackedLibZip).then(installPackedLib);
  } else {
    console.log(`❌ unknown libraries Check Mode`);
  }
};

module.exports = {
  compilationPath,
  cliConfigFile,
  refreshCliConfigFile,
  getInstallStatus,
  libBatchInstall,
  updateCliCore,
  downloadPackedLibZip,
  installPackedLib,
  updateCliPlatform,
  checkLib,
};
