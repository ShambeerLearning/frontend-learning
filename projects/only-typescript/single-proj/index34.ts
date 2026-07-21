import promptSync from 'prompt-sync';
const prompt = promptSync();

function inputUser(): string {
    return prompt(`Вводите:  `);
}

type PcComponent = {
    id: string;
    category: string;
    brand: string;
    price: number;
}

const inventory: PcComponent[] = [
    { id: "p1", category: "SSD", brand: "Samsung", price: 8500 },
    { id: "p2", category: "GPU", brand: "Palit", price: 32000 },
    { id: "p3", category: "SSD", brand: "Kingston", price: 4000 },
    { id: "p4", category: "RAM", brand: "Corsair", price: 6000 },
    { id: "p5", category: "SSD", brand: "Samsung", price: 12000 }
]

function applyPromoAndSort(components: PcComponent[], searchCategory: string, targetBrand: string, discount: number): PcComponent[] {
    const filteredComponents: PcComponent[] = (
        components.filter((component) => {
            return component.category.toLowerCase().includes(searchCategory.toLowerCase());
        })
    )

    if (filteredComponents.length === 0) {
        console.error(`Категория пуста`);
        return [];
    }

    return filteredComponents
        .map((component) => {
            if(component.brand.toLowerCase() === targetBrand.toLowerCase()) {
                return {
                    ...component,
                    price: component.price - discount,
                }
            }
            return component;
        })
        .sort((a, b) => {
            return a.price - b.price;
        })
}

console.table(inventory);
console.table(applyPromoAndSort(inventory, inputUser(), inputUser(), Number(inputUser())));