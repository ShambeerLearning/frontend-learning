import {Cat} from "./types";

function outName(cat: Cat): string {
    return `
Имя питомца: ${cat.name}
Возраст: ${cat.age}
    `;
}

export {outName};