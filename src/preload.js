// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts


const { contextBridge, ipcRenderer, clipboard } = require('electron')

contextBridge.exposeInMainWorld('currentRunningPlatform', 'desktop')

contextBridge.exposeInMainWorld('arduinoApi', {
  'arduino.board.list': () => ipcRenderer.invoke('arduino.board.list'),
  'arduino.code.verify': (...params) => ipcRenderer.invoke('arduino.code.verify', ...params),
  'arduino.code.upload': (...params) => ipcRenderer.invoke('arduino.code.upload', ...params),
  'arduino.code.copy': (code) => ipcRenderer.invoke('arduino.code.copy', code)
})