import { spawn } from 'node:child_process';
import fs from 'fs';
import process, { argv } from 'node:process';

const projectName = argv[3];

if (!projectName) {
    console.error("Ошибка: укажи имя проекта для запуска!");
    process.exit(1);
}

const projectPath = `./projects/autogen/${projectName}`;

if (!fs.existsSync(projectPath)) {
    console.error(`Ошибка: проект ${projectName} не найден!`);
    process.exit(1);
}

spawn('npm', ['run', 'dev'], {
    cwd: projectPath,
    stdio: 'inherit',
    shell: true
});