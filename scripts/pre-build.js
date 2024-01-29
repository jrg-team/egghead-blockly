const { checkLib } = require("../src/native-tools/cli");
const {
  packedLibInstallFileFlag,
  arduinoDirectories,
} = require("../src/native-tools/utils");
const fs = require("fs");

const rmDir = (path) => {
  if(fs.existsSync(path)) fs.rmdirSync(path, { force: true, recursive: true });
}
const cleanCache = () => {
  console.log('🧽 cleaning arduino-cli caches to reduce package size')
  // fs.rmSync(packedLibInstallFileFlag, { force: true });
  rmDir(arduinoDirectories.data)
  // rmDir(arduinoDirectories.user)
  rmDir(arduinoDirectories.downloads)
};

const main = () => {
  cleanCache();
  checkLib({ mode: "packed" });
};

main();
