import { app, BrowserWindow, ipcMain } from 'electron';
import { exec } from 'child_process';
import os from 'os';

// Эти переменные автоматически заполняются Webpack
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 700,
    width: 900,
    webPreferences: {
      // Подключаем наш preload скрипт
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  // Открываем инструменты разработчика (опционально)
  // mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// ОБРАБОТЧИК КОМАНД CMD
ipcMain.handle('execute-command', async (event, command: string) => {
  return new Promise((resolve) => {
    // В целях безопасности в реальном приложении 
    // здесь должна быть проверка разрешенных команд
    exec(command, (error, stdout, stderr) => {
      if (error) {
        resolve(`Ошибка исполнения: ${error.message}`);
        return;
      }
      if (stderr) {
        resolve(`Ошибка системы: ${stderr}`);
        return;
      }
      resolve(stdout); // Возвращаем результат в интерфейс
    });
  });
});

// Дополнительно: получение инфо о системе
ipcMain.handle('get-os-info', () => {
  return `${os.type()} ${os.release()} (${os.arch()})`;
});