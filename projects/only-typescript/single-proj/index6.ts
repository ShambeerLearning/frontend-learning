interface Creep{
    name: string;
    health: number;
    isHostile: boolean;
    visualTraits: string[];
}

const creeps: Mob[] = [
    { name: "Cow", health: 10, isHostile: false, visualTraits: ["horns", "hooves"] },
    { name: "Zombie", health: 20, isHostile: true, visualTraits: ["green skin", "torn clothes"] },
    { name: "The Man From The Fog", health: 100, isHostile: true, visualTraits: ["distorted Steve model", "large mouth", "glowing eyes"] },
    { name: "Sheep", health: 8, isHostile: false, visualTraits: ["wool"] }
];

function fetchMCreep(): Promise<Creep[]> {
    return new Promise(resolve => setTimeout(resolve, reject) => {
        try {
            async function processGameData(){
                t
            }
        }
    }, 1000);
}