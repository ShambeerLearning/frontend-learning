import fs from 'fs';
import path from 'path';
import { argv } from 'node:process';
import process from 'node:process';

const dataIndex = (
    `<div class="tester">
    <div class="tester__title">abob</div>
    <div class="tester__content">privet</div>
</div>
<script type="module" src="./main.js"></script>
`);
const dataStyles = ``;
const dataScript = (
    `import "./markup.html";
import "./style.css";
`);

function nameProject() {
    const projectName = argv[3];
    if(!projectName){
        console.error("Ошибка: укажи имя проекта при запуске скрипта!");
        process.exit(1);
    }
    return projectName;
}

function genStructure(nameProject){
    const pathSrc = `./projects/autogen/${nameProject}/src`;
    function createStructureSrc() {
        fs.writeFileSync(path.join(pathSrc, "markup.html"), dataIndex);
        fs.writeFileSync(path.join(pathSrc, "style.css"), dataStyles);
        fs.writeFileSync(path.join(pathSrc, "main.js"), dataScript);
    }

    if (fs.existsSync(pathSrc)) {
        createStructureSrc();
    }
    else {
        fs.mkdirSync(pathSrc, { recursive: true });
        createStructureSrc();
    }

}

genStructure(nameProject());