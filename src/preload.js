// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts


const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('currentRunningPlatform', 'desktop')

contextBridge.exposeInMainWorld('arduinoApi', {
  'file.save-ino': (code) => ipcRenderer.send('file.save-ino', code),
  'file.save-bloc': (code) => ipcRenderer.send('file.save-bloc', code),
  'file.save-file': ({code, path, suffix}) => ipcRenderer.send('file.save-file', {code, path, suffix}),
  'arduino.board.list': () => ipcRenderer.invoke('arduino.board.list')
})