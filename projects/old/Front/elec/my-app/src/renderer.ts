// Описание интерфейса для TypeScript
interface IElectronAPI {
  runCmd: (command: string) => Promise<string>;
  getSystemInfo: () => Promise<string>;
}

const api = (window as any).electronAPI as IElectronAPI;

const output = document.getElementById('console-output');
const osInfo = document.getElementById('os-version');

// 1. Получаем инфо о системе при запуске
async function init() {
  const info = await api.getSystemInfo();
  osInfo.innerText = `Система: ${info}`;
}

// 2. Обработка кнопок
document.getElementById('btn-dir').addEventListener('click', async () => {
  output.innerText = 'Выполняю dir...';
  const result = await api.runCmd('dir');
  output.innerText = result;
});

document.getElementById('btn-ip').addEventListener('click', async () => {
  output.innerText = 'Выполняю ipconfig...';
  const result = await api.runCmd('ipconfig');
  output.innerText = result;
});

init();