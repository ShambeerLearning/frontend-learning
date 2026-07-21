import promptSync from 'prompt-sync';
const prompt = promptSync();

const a: number = Number(prompt("Введите число а - "));
const b: number = Number(prompt("Введите число b - "));
const c: number = Number(prompt("Введите число c - "));
const D: number = (b * b) - (4 * a * c);
let resultMessage: string = "";
let x1: number;
let x2: number;

if (D > 0){
    x1 = (((-1) * b) + Math.sqrt(D)) / (2 * a);
    x2 = (((-1) * b) + Math.sqrt(D)) / (2 * a);
    resultMessage = "\n\nРезультат два корня: \nПервый корень - " + x1 + "\nВторой корень - " + x2 + "\n";
}
else if (D === 0){
    x1 = ((-1) * b) / (2 * a);
    console.log("Дискриминант равен 0, поэтому");
    console.log("Результат единственный корень: " + x1);
    resultMessage = "\n\nРезультат единственный корень: \nКорень - " + x1 + "\n";
}
else if (D < 0){
    resultMessage = "\n\nКорней нет!\n"
}

console.log(resultMessage);