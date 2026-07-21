type crystal = {
    name: string;
    totalVis: number;
    stabilisation: number;
}

const crystalchest: crystal[] = [
    { name: "ordo", totalVis: 45, stabilisation: 1 },
    { name: "aer", totalVis: 3, stabilisation: 100 },
    { name: "aqua", totalVis: 25, stabilisation: 33 },
    { name: "ignis", totalVis: 415, stabilisation: 0 },
]

function output(item: crystal): void {
    console.log(`\nТип аспекта: ${item.name}\nИтоговое количество вис: ${item.totalVis}\nСтабилизация кристалла: ${item.stabilisation}`);
}

crystalchest.forEach(output);
