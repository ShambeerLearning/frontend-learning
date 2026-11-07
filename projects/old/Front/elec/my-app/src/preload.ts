import { contextBridge, ipcRenderer } from 'electron';

// Экспонируем методы в глобальный объект window.electronAPI
contextBridge.exposeInMainWorld('electronAPI', {
  runCmd: (command: string) => ipcRenderer.invoke('execute-command', command),
  getSystemInfo: () => ipcRenderer.invoke('get-os-info')
});