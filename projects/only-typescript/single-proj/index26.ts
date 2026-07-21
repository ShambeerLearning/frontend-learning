import promptSync from 'prompt-sync';
const prompt = promptSync();

function inputUser(): string {
   return prompt(`Вводите:  `);
}

type ModConfig = {
    modId: string;
    memoryAllocated: number;
    isClientSide: boolean;
}

const myMods: ModConfig[] = [
    { modId: "thaumcraft", memoryAllocated: 1024, isClientSide: false },
    { modId: "minimap", memoryAllocated: 256, isClientSide: true },
    { modId: "jei", memoryAllocated: 512, isClientSide: true }
]

function increaseModMemory(mods: ModConfig[], modName: string, addRam: number): ModConfig[] {
    const result: ModConfig | undefined = mods.find((mod: ModConfig): boolean => mod.modId === modName);
    if (result === undefined) {
        console.error(`Ошибка: Мод ${modName} не найден`);
        return mods;
    }
    else {
        return mods.map((mod) => {
            if(mod.modId === modName) {
                return {
                    ...mod,
                    memoryAllocated : mod.memoryAllocated + addRam,
                };
            }
            return mod;
        });
    }
}

const modName: string = inputUser();
const quantityRam: number = Number(inputUser());
const newMods: ModConfig[] = increaseModMemory(myMods, modName, quantityRam);
console.table(newMods);