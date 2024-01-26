// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("currentRunningPlatform", "desktop");

contextBridge.exposeInMainWorld("arduinoApi", {
  "arduino.board.list": () => ipcRenderer.invoke("arduino.board.list"),
  "arduino.code.verify": (...params) =>
    ipcRenderer.invoke("arduino.code.verify", ...params),
  "arduino.code.upload": (...params) =>
    ipcRenderer.invoke("arduino.code.upload", ...params),
  "arduino.code.copy": (code) => ipcRenderer.invoke("arduino.code.copy", code),
  "arduino.core.list": () => ipcRenderer.invoke("arduino.core.list"),
  "serial.monitor.open": (portLabel) =>
    ipcRenderer.send("serial.monitor.open", portLabel),
});

contextBridge.exposeInMainWorld("communication", {
  "blockly.variable.name": (title, defaultValue) =>
    ipcRenderer.invoke("blockly.variable.name", { title, defaultValue }),
});

ipcRenderer.on('file.bloc.load', (_, file) => {
  contextBridge.exposeInMainWorld("AssociateFile", file);
})
