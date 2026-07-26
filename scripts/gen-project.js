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

function genStructure(nameProject){
    const pathDir = `./projects/autogen/${nameProject}`;
    const data = (
`<div class="tester">
    <div class="tester__title">abob</div>
    <div class="tester__content">privet</div>
</div>`
    );

    if (fs.existsSync(pathDir)) {
        fs.writeFileSync(path.join(pathDir, "index.html"), data);
    }
    else {
        fs.mkdirSync(pathDir);
        fs.writeFileSync(path.join(pathDir, "index.html"), data);
    }
}

genStructure(nameProject());