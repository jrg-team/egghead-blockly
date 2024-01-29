const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const {
  arduinoDirectories,
  arduinoBasePath,
} = require("../src/native-tools/utils");
const { updateCliCore, updateCliPlatform } = require("../src/native-tools/cli");

const getUrls = () => {
  const indexFilePath = path.join(
    arduinoDirectories.data,
    "./package_index.json"
  );
  const platformLists = JSON.parse(
    fs.readFileSync(indexFilePath, "utf8")
  ).packages;
  const esp32Conf = platformLists.find((l) => l.name === "esp32");
  const esp32tools = esp32Conf.tools;
  const esp32Platform = esp32Conf.platforms;
  const downloadList1 = esp32Platform.map((p) => p.url);
  const downloadList2 = esp32tools.reduce((prev, cur) => {
    return [...prev, ...cur.systems.map((s) => s.url)];
  }, []);
  return Array.from(new Set([...downloadList2, ...downloadList1]));
};

const downloadOneTool = (url) => {
  const name = path.parse(url).base;
  const toolPath = path.join(arduinoDirectories.downloads, "./packages", name);
  if (fs.existsSync(toolPath)) return Promise.resolve();
  const cmd = `curl -o ${toolPath} ${url}`;
  console.log(`👉 downloading ${name} ${url}`);
  return new Promise((resolve, reject) => {
    exec(cmd, { cwd: arduinoBasePath }, (error, stdout, stderr) => {
      console.log(stdout, stderr);
      if (fs.statSync(toolPath).size === 0) {
        console.log(
          `❌ ${toolPath} 是空文件, 删除，可能已经触发github的下载限制`
        );
        fs.rmSync(toolPath, { force: true });
        exec(`open ${url}`)
      }
      resolve(stdout);
    });
  });
};

const main = async () => {
  // await updateCliCore({ useMirror: false });
  if (!fs.existsSync(path.join(arduinoDirectories.downloads, "./packages"))) {
    fs.mkdirSync(path.join(arduinoDirectories.downloads, "./packages"), {
      recursive: true,
    });
  }
  const urls = getUrls();
  // return console.log(urls, urls.length)
  await urls.reduce((promiseChain, url) => {
    return promiseChain.then(() => downloadOneTool(url));
  }, Promise.resolve());

  const cmd = `ossutil cp -r -f -c ./oss_config \"${path.join(
    arduinoDirectories.downloads,
    "packages"
  )}/\" \"oss://otto-blockly/download/\" --jobs 100`;
  console.log("🚚 uploading esp32 tools");
  await new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      console.log(stdout);
      resolve(stdout);
    });
  });
  await updateCliCore({ useMirror: true });
};

main();
