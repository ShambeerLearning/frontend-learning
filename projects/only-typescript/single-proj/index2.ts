import promptSync from 'prompt-sync';
const prompt = promptSync();

const mass: number = Number(prompt("Введите вашу массу - "));
const h: number = Number(prompt("Введите ваш рост - "));
const I: number = mass / Math.pow(h, 2);

console.log("\n");
if (I < 18.5) {
    console.log(`Результат - ${I}. Недостаточная масса тела`);
}
else if (18.5 < I && I < 24.9) {
    console.log(`Результат - ${I}. Норма`);
}
else if (25 < I && I < 29.9) {
    console.log(`Результат - ${I}. Избыточная масса тела`);
}
else if (I > 30) {
    console.log(`Результат - ${I} Ожирение`);
}