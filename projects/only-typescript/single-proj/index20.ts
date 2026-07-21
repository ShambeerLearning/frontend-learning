type BaseMod = {
    name: string;
    version: string;
};

type HorrorMod = BaseMod & {
    entityName: string;
    hasJumpscares: boolean;
}

const installedMods: HorrorMod[] = [
    { name: "The Man From The Fog", version: "1.20.1", entityName: "Искаженный Стив", hasJumpscares: true },
    { name: "Bloodmoon", version: "1.12.2", entityName: "Красная Луна", hasJumpscares: false },
    { name: "Smile", version: "1.20.1", entityName: "Улыбающаяся Сущность", hasJumpscares: true }
]

function analyzeMods({name, entityName, hasJumpscares}: HorrorMod): void {
    if (hasJumpscares) {
        console.warn(`Внимание! Мод ${name} содержит скримеры. Главный враг: ${entityName}`)
    }
    else {
        console.log(`Мод ${name} - атмосферный хоррор без скримеров`)
    }
}

console.log(`Начало программы\n`)
installedMods.forEach(analyzeMods)