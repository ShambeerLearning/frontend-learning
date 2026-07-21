type Server = {
    serverName: string;
    onlinePlayers: number;
}

function getServerStatus(ServerName: string, OnlinePlayers: number): string {
    if (OnlinePlayers === 0) {
        return `Сервер ${ServerName} пуст.`;
    }
    else if (OnlinePlayers > 0) {
        return `На сервере ${ServerName} сейчас ${OnlinePlayers} игроков.`;
    }
    else {
        return `Error`;
    }
}

const server1: Server = {
    serverName: `Абоб`,
    onlinePlayers: 0,
}

const server2: Server = {
    serverName: `Ванила`,
    onlinePlayers: 10,
}

console.log(getServerStatus(server1.serverName, server1.onlinePlayers));
console.log(getServerStatus(server2.serverName, server2.onlinePlayers));