import promptSync from 'prompt-sync';
const prompt = promptSync();

function inputUser(): string {
    return prompt(`Вводите:  `);
}

type Keyboard = {
    model: string;
    brand: string;
    price: number;
    isWireless: boolean;
}

const storeInventory: Keyboard[] = [
    { model: "Satori TKL", brand: "Red Square", price: 6500, isWireless: false },
    { model: "KD87A", brand: "Dark Project", price: 8900, isWireless: true },
    { model: "Keychron K8", brand: "Keychron", price: 9500, isWireless: true },
    { model: "Encore", brand: "Red Square", price: 5000, isWireless: false }
]

function applyDiscountAndSort(keyboards: Keyboard[], targetBrand: string, discountAmount: number): Keyboard[] {
    return keyboards
        .map((keyboard) => {
            if(keyboard.brand === targetBrand){
                return {
                    ...keyboard,
                    price: keyboard.price - discountAmount
                }
            }
            else {
                return keyboard;
            }
        })
        .sort((a, b) => {
            return a.price - b.price;
        });
}

const inputBrand = inputUser();
const inputPrice = Number(inputUser());
console.table(storeInventory);
console.table(applyDiscountAndSort(storeInventory, inputBrand, inputPrice));