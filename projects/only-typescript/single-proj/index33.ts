import promptSync from 'prompt-sync';
const prompt = promptSync();

function inputUser(): string {
    return prompt(`Вводите:  `);
}

type GameCharacter = {
    id: string;
    name: string;
    role: `Killer` | 'Survivor';
    price: number;
}

function updateRoster(characters: GameCharacter[], searchRole: string, targetName: string, discount: number): GameCharacter[] {
    const filteredCharacters: GameCharacter[] = (
        characters.
            filter((character) => {
                return character.role.toLowerCase().includes(searchRole.toLowerCase());
        })
    );

    if (filteredCharacters.length === 0) {
        console.error(`Персонажи не найдены`);
        return [];
    }

    return filteredCharacters
        .map((character) => {
            if(character.name.toLowerCase() === targetName.toLowerCase()) {
                return {
                    ...character,
                    price: character.price - discount,
                }
            }
            return character;
        })
        .sort((a, b) => a.price - b.price);
}

const roster: GameCharacter [] = [
    { id: "c1", name: "Trapper", role: "Killer", price: 4500 },
    { id: "c2", name: "Meg Thomas", role: "Survivor", price: 4500 },
    { id: "c3", name: "Nurse", role: "Killer", price: 9000 },
    { id: "c4", name: "Dwight Fairfield", role: "Survivor", price: 4500 },
    { id: "c5", name: "Huntress", role: "Killer", price: 4500 }
]

console.table(roster);
console.table(updateRoster(roster, inputUser(), inputUser(), Number(inputUser())));