import promptSync from 'prompt-sync';
const prompt = promptSync();

function inputUser(): string {
    return prompt(`Вводите:  `);
}

type MinecraftMod = {
    id: string;
    name: string;
    category: string;
    memoryImpact: number;
}

const modpack: MinecraftMod[] = [
    { id: "man_from_fog", name: "The Man From The Fog", category: "horror", memoryImpact: 512 },
    { id: "bewitchment", name: "Bewitchment", category: "magic", memoryImpact: 1024 },
    { id: "thaumcraft", name: "Thaumcraft 6", category: "magic", memoryImpact: 800 },
    { id: "jei", name: "Just Enough Items", category: "utility", memoryImpact: 128 },
    { id: "cave_dweller", name: "Cave Dweller", category: "horror", memoryImpact: 350 }
]

function configureModpack(mods: MinecraftMod[], searchQuery: string, targetCategory: string, extraRam: number): MinecraftMod[] {
    const filteredMods: MinecraftMod[] = (
        mods.filter((mod) => {
            return mod.name.toLowerCase().includes(searchQuery.toLowerCase());
        })
    );

    if (filteredMods.length === 0) {
        console.error(`Ошибка: Моды по запросу не найдены`);
    }

    return filteredMods
        .map((mod) => {
            if(mod.category === targetCategory) {
                return {
                    ...mod,
                    memoryImpact: mod.memoryImpact + extraRam
                };
            }
            return mod;
        })
        .sort((a, b) => {
            return a.memoryImpact - b.memoryImpact;
        });
}

console.table(modpack);
console.table(configureModpack(modpack, inputUser(), inputUser(), Number(inputUser())));

