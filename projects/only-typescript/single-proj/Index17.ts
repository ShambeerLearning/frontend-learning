interface Implant{
    id: number;
    name: string;
    price: number;
    isIllegal: boolean;
}

const serverDB: Implant[] = [
    { id: 1, name: "Оптика 'Кироши'", price: 1500, isIllegal: false },
    { id: 2, name: "Сандевистан", price: 35000, isIllegal: true },
    { id: 3, name: "Клинки Богомола", price: 25000, isIllegal: true },
    { id: 4, name: "Синтетические легкие", price: 4000, isIllegal: false }
]

function fetchImplants(): Promise<Implant[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(serverDB);
        }, 2000);
    });
}

function printContrabands({name, price}: Implant): void {
    console.log(`Внимание! Контрабанда: ${name}. Новая цена: ${price}`)
}

function legendaryImplantFinder(implants: Implant[], targetName: string): Implant | undefined {
    return implants.find(implant => implant?.name === targetName)
}

function getBlackMarketItems(implants: Implant[]): Implant[] {
    return implants
        .filter(implant => implant.isIllegal)
        .map(implant => {
            return {
               ...implant,
               price: implant.price + 5000
            }
        });
}

function calculateLegalCost(implants: Implant[]): number {
    return implants
        .filter(implant => !implant.isIllegal)
        .reduce((acc, implant) => acc + implant.price, 0);
}

async function runMakerAnalysis() {
    try {
        console.log(`Взлом сервера...`)
        const allImplants = await fetchImplants();
        const legendaryImplant = legendaryImplantFinder(allImplants, `Сандевистан`)
        const blackMarketItems = getBlackMarketItems(allImplants);
        const legalTotalCost: number = calculateLegalCost(allImplants);

        console.log(`Найден легендарный имплант: ${legendaryImplant?.name}`);
        console.log(`Стоимость легальных имплантов: ${legalTotalCost}`);
        blackMarketItems.forEach(blackMarketItem => printContrabands(blackMarketItem));
    }
    catch (error) {
        console.error(error);
    }
}

runMakerAnalysis();
console.log(`Ожидаю ответ от сети...`)