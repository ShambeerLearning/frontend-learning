class QuadroUrav{
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    checkResult(): string {
        const D: number = (Math.pow(this.b, 2) - (4 * this.a * this.c));
        if (D > 0){
            const x1: number = (((-1) * this.b) + Math.sqrt(D)) / (2 * this.a);
            const x2: number = (((-1) * this.b) - Math.sqrt(D)) / (2 * this.a);
            return "Результат два корня: \nПервый корень - " + x1 + "\nВторой корень - " + x2 + "\n";
        }
        else if (D === 0){
            const x: number = ((-1) * this.b) / (2 * this.a);
            return "Результат единственный корень: \nКорень - " + x + "\n";
        }
        else if (D < 0){
            return  "Корней нет!\n";
        }
        else {
            return "Ошибка!";
        }
    }
}

const firstAttempt = new QuadroUrav(-1, -5, 6);
const secondAttempt = new QuadroUrav(-1, -3, 2);
console.log(firstAttempt.checkResult());
console.log(secondAttempt.checkResult());