type ItemStack = {
    id: string;
    quantity: number;
}

const playerBag: ItemStack[] = [
    { id: "thaumium_ingot", quantity: 5 },
    { id: "vis_crystal", quantity: 12 }
]

function giveItem(bag: ItemStack[], targetId: string, amount: number): void {
    const findIndex: number = bag.findIndex(({id}: ItemStack): boolean => id === targetId);
    if (findIndex !== -1) {
        bag[findIndex].quantity += amount;
    }
    else {
        bag.push(({id: targetId, quantity: amount}));
    }
}

console.table(playerBag);
giveItem(playerBag, "thaumium_ingot", 3);
giveItem(playerBag, "amber", 2);
console.table(playerBag);