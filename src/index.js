const { app, BrowserWindow, ipcMain } = require("electron");
const prompt = require("electron-prompt");
const path = require("path");
const arduinoApi = require("./native-tools/arduino");
const { SerialPort } = require("serialport");
const fs = require("fs");
const {
  refreshCliConfigFile,
  updateCliPlatform,
  checkLib,
} = require("./native-tools/cli");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  app.quit();
}

let serialPort = null;

const createWindow = (config = {}) => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1400,
    height: 1000,
    webPreferences: {
      preload: path.join(__dirname, "./preload/preload-index.js"),
    },
    icon: path.join(__dirname, "./media/app-icon.png"),
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
  if (config.file) {
    mainWindow.webContents.send('file.bloc.load', config.file)
  }
  return mainWindow;
};

const createTermWindow = (event, portLabel) => {
  const monitorWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "./preload/preload-monitor.js"),
    },
    icon: path.join(__dirname, "./media/app-icon.png"),
  });

  serialPort = new SerialPort({
    path: portLabel,
    baudRate: 115200,
    autoOpen: true,
  });
  serialPort.on("data", function (data) {
    monitorWindow.webContents.send("serial.monitor.onReceive", data.toString());
  });
  monitorWindow.loadFile(path.join(__dirname, `monitor.html`), {
    query: { port: portLabel },
  });
  // monitorWindow.webContents.openDevTools();
  monitorWindow.on("closed", () => {
    serialPort && serialPort.close();
    serialPort = null;
  });
};

const registerArduinoApi = () => {
  Object.entries(arduinoApi).forEach(([key, callback]) => {
    ipcMain.handle(key, callback);
  });
  ipcMain.on("serial.monitor.open", createTermWindow);
  ipcMain.handle("serial.monitor.changeBaudRate", (_, newBaudRate) => {
    if (!serialPort) return Promise.reject();
    return new Promise((resolve, reject) => {
      serialPort.update({ baudRate: newBaudRate }, (err) => {
        if (err) reject(err);
        else resolve(newBaudRate);
      });
    });
  });
  ipcMain.handle("serial.monitor.send", (_, message) => {
    return serialPort && serialPort.write(message);
  });
  ipcMain.handle("serial.monitor.toggle", () => {
    if (!serialPort) return false;
    if (serialPort.isOpen) {
      serialPort.close();
      return false;
    } else {
      serialPort.open();
      return true;
    }
  });
};

const initArduinoCli = async () => {
  refreshCliConfigFile();
  await checkLib({ mode: "packed" });
  await updateCliPlatform();
  console.log("✨ Arduino Cli init done");
};

const registerCommunicationApi = (targetWindow) => {
  ipcMain.handle("blockly.variable.name", (_, { title, defaultValue }) => {
    return prompt(
      {
        title,
        label: title,
        value: defaultValue,
        type: "input",
        resizable: true,
        buttonLabels: {
          ok: "确认",
          cancel: "取消",
        },
      },
      targetWindow
    );
  });
};

const fetchOpenedFile = async () => {
  const filePaths = process.argv.slice(-1);
  if (!filePaths || !filePaths.length) return null;
  const targetFilePath = filePaths[0];
  return parseBLOCFile(targetFilePath)
};

const parseBLOCFile = async (filepath) => {
  if (!/\.bloc$/.test(filepath)) {
    return null;
  }
  try {
    const fileName = path.parse(filepath).name;
    const content = fs.readFileSync(filepath, { encoding: "utf8" });
    console.log(`✅ specific BLOC file loaded`);
    return {
      name: fileName,
      content,
    };
  } catch (e) {
    console.log(`⚠️ cannot read specific BLOC file`)
    return null;
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  registerArduinoApi();
  initArduinoCli();
  const openedFile = await fetchOpenedFile();
  const mainWindow = createWindow({ file: openedFile });
  registerCommunicationApi(mainWindow);
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on("open-file",  async (event, filePath) => {
  // 在这里处理打开的文件
  console.log("Opened file via open-file event:", filePath);
  const openedFile =  await parseBLOCFile(filePath);
  if (openedFile) createWindow({ file: openedFile })
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
