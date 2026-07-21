type Wand = {
    wandName: string;
    currentWis: number;
}

type CraftItem = {
    name: string;
    requiredWis: number;
}

function checkWandCharge(wand: Wand, craftItem: CraftItem): string {
    const craftNameUpper = craftItem.name.toUpperCase();
    if (wand.currentWis >= craftItem.requiredWis) {
        const remainder: Wand = {
            ...wand,
            currentWis: wand.currentWis - craftItem.requiredWis,
        }
        return `Предмет ${craftNameUpper} готов. Остаток заряда: ${remainder.currentWis}`;
    }
    else {
        const shortage: Wand = {
            ...wand,
            currentWis: craftItem.requiredWis - wand.currentWis,
        }
        return `Для предмета ${craftNameUpper} недостаточно энергии. Не хватает: ${shortage.currentWis}`;
    }
}

const silverWand: Wand = {
    wandName: `Серебрянный жезл`,
    currentWis: 150,
}

const matricCraft: CraftItem = {
    name: `Матрица`,
    requiredWis: 100
}

const GreatwoodWand: Wand = {
    wandName: `Великий жезл`,
    currentWis: 40,
}

const magicWorkstationCraft: CraftItem = {
    name: `Магический верстак`,
    requiredWis: 85,
}

console.log(checkWandCharge(silverWand, matricCraft));
console.log(checkWandCharge(GreatwoodWand, magicWorkstationCraft));