// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('kiosk', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  closeapp: () => ipcRenderer.invoke('close-app', 'user-initiated'),
  printslip: (data: string) => ipcRenderer.invoke('print-slip', data),
  // we can also expose variables, not just functions
});
