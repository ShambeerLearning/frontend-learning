type AltarDimensions = [number, number];
type PowerDictionary = Record<string, number>;

const modConfig: PowerDictionary = {
    "obsidian": 500,
    "netherite_block": 2000,
    "crying_obsidian": 800,
}

const testDimensions: AltarDimensions = [2, 3];
const testBlock: string = "obsidian";

function validateAltarSetup(dimensions: AltarDimensions, coreBlock: string, dict: PowerDictionary) {
    if(dimensions[0] === 2 && dimensions[1] === 3) {
        console.error(`Ошибка! Формат алтаря 2x3 больше не применяется в версии 1.20.1`);
        return;
    }
    else {
        try {
            const power = dict[coreBlock];
            console.log(`Успех! - ${power}`)
        }
        catch (e) {
            console.error(e);
        }
    }
}

validateAltarSetup(testDimensions, testBlock, modConfig);