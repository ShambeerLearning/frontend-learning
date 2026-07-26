import fs from 'fs';
import path from 'path';
import { argv } from 'node:process';
import process from 'node:process';

function nameProject() {
    const projectName = argv[3];
    if(!projectName){
        console.error("Ошибка: укажи имя проекта при запуске скрипта!");
        process.exit(1);
    }
    return projectName;
}

const dataIndex = (
    `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project</title>
</head>
<body>
    <div id="tester"></div>
    <script type="module" src="/src/main.js"></script>
</body>
</html>
`);

const dataMarkup = (
    `<div class="tester">
    <div class="tester__title">abob</div>
    <div class="tester__content">privet</div>
</div>
`);

const dataStyles = ``;

const dataScript = (
    `import markup from "./markup.html?raw";
import "./style.css";

document.getElementById('tester').insertAdjacentHTML('afterbegin', markup);
`);

const dataJson = (
    `{
  "name": "${nameProject()}",
  "version": "1.0.0",
  "main": "./src/main.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1",
    "dev": "npx vite --host"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}`);

function genStructure(nameProject){
    const pathSrc = `./projects/autogen/${nameProject}/src`;
    const pathDir = `./projects/autogen/${nameProject}`;

    fs.mkdirSync(pathSrc, { recursive: true });

    fs.writeFileSync(path.join(pathDir, "index.html"), dataIndex);
    fs.writeFileSync(path.join(pathDir, "package.json"), dataJson);

    fs.writeFileSync(path.join(pathSrc, "markup.html"), dataMarkup);
    fs.writeFileSync(path.join(pathSrc, "style.css"), dataStyles);
    fs.writeFileSync(path.join(pathSrc, "main.js"), dataScript);
}

genStructure(nameProject());