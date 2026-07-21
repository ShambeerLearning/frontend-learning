interface Armor{
    name: string;
    defense: number;
    weight: string;
    magicResistance: number;
}

const baseArmor: Armor = {
    name: "Стальная кираса",
    defense: 15,
    weight: "Тяжелая",
    magicResistance: 0,
}

const {name, defense} = baseArmor;
console.log(`Экипировано: ${name}. Защита: ${defense}`);

const upgradeArmor: Armor = {
    ...baseArmor,
    name: "Руническая кираса",
    magicResistance: 50,
}
console.log("Итоговая броня", upgradeArmor);