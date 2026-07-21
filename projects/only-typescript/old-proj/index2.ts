type Player = {
    name: string;
    hp: number;
    weapon: "sword" | "bow";
}

const playersOnServer: Player[] = [
    { name: "shamber", hp: 100, weapon: "sword" },
    { name: "julie", hp: 75, weapon: "bow" },
    { name: "kris", hp: 89, weapon: "bow" },
    { name: "vadya", hp: 33, weapon: "sword" },
]

function sortPlayers(players: Player[], limitationHp: number): string[] {
    const filteredPlayers = (
        players.filter((thisplayer) => {
            if (thisplayer.hp > limitationHp) {
                return thisplayer;
            }
        })
    )
    
    if (filteredPlayers.length === 0) {
        console.error(`Игроки не найдены`);
        return [];
    }
    return filteredPlayers.map(thisplayer => `У игрока ${thisplayer.name} здоровье: ${thisplayer.hp}`)
}

console.log(sortPlayers(playersOnServer, 30));