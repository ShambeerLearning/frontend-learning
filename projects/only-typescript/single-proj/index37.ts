type Item = {
    id: string;
    displayName: string;
    weight: number;
}

const playerInventory: Item[] = [];

const groundLoot: Item = {
    id: `item_iron_01`,
    displayName: `Железный слиткок`,
    weight: 1.5,
};

function pickUpItem(inventory: Item[], item: Item): void {
    inventory.push(item);
    const {displayName, weight} = item;
    console.log(`Подобран предмет: ${displayName}. Вес: ${weight} кг`);
}

pickUpItem(playerInventory, groundLoot);
console.log(playerInventory);