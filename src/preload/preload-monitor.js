const { contextBridge, ipcRenderer } = require("electron");

// 在渲染进程中将预定义变量注入到 window 对象中
contextBridge.exposeInMainWorld("monitor", {
  // 在这里添加你要传递的参数或方法
  "serial.monitor.toggle": () => ipcRenderer.invoke("serial.monitor.toggle"),
  "serial.monitor.onReceive": (callback) =>
    ipcRenderer.on("serial.monitor.onReceive", (_, value) => callback(value)),
  "serial.monitor.send": (message) =>
    ipcRenderer.invoke("serial.monitor.send", message),
  "serial.monitor.changeBaudRate": (newRate) =>
    ipcRenderer.invoke("serial.monitor.changeBaudRate", newRate),
});
