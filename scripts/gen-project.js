import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import process from 'node:process';

const projectsPath = fileURLToPath(new URL('../projects/autogen/', import.meta.url));
const projectName = process.argv[2];

if (!projectName || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(projectName)) {
    console.error('Укажи имя проекта из строчных латинских букв, цифр и дефисов.');
    process.exit(1);
}

const projectPath = join(projectsPath, projectName);

if (existsSync(projectPath)) {
    console.error(`Проект «${projectName}» уже существует.`);
    process.exit(1);
}

const indexHtml = `<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectName}</title>
</head>
<body>
    <div id="tester"></div>
    <script type="module" src="./src/main.js"></script>
</body>
</html>
`;

const markup = `<div class="tester">
    <div class="tester__title">Новый проект</div>
</div>
`;

const mainScript = `import markup from './markup.html?raw';
import './style.css';

document.getElementById('tester').insertAdjacentHTML('afterbegin', markup);
`;

mkdirSync(projectPath);
const sourcePath = join(projectPath, 'src');
mkdirSync(sourcePath);
writeFileSync(join(sourcePath, 'markup.html'), markup);
writeFileSync(join(sourcePath, 'style.css'), '');
writeFileSync(join(sourcePath, 'main.js'), mainScript);
writeFileSync(join(projectPath, 'index.html'), indexHtml);

console.log(`Проект создан в projects/autogen/${projectName}`);
console.log(`Запуск: npm run dev -- projects/autogen/${projectName}`);
