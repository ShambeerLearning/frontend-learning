type Crystal = {
    aspect: string;
    visAmount: number;
}

const crystalPouch: Crystal[] = [
    { aspect: "Aer", visAmount: 15 },
    { aspect: "Ignis", visAmount: 25 },
    { aspect: "Ordo", visAmount: 10 },
    { aspect: "Aqua", visAmount: 5 }
]

function calculateTotalVis(pouch: Crystal[]): number {
    return pouch
        .reduce((acc, b) => acc + b.visAmount, 0);
}

console.log(calculateTotalVis(crystalPouch));