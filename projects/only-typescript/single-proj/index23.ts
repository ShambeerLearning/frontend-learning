import promptSync from 'prompt-sync';
const prompt = promptSync();

type HomeServer = {
    ip: string;
    os: string;
    isOnline: boolean;
}

const myServers: HomeServer[] = [
    { ip: "192.168.1.10", os: "Arch", isOnline: true },
    { ip: "192.168.1.15", os: "Debian", isOnline: false },
    { ip: "10.0.0.5", os: "CasaOS", isOnline: true }
]

function inputUser(): string {
    return prompt(`Введите ip целевого сервера: `);
}

function toggleServer(server: HomeServer[], selectIp: string): void {
    const result: HomeServer | undefined = server.find(({ip}: HomeServer): boolean => ip === selectIp)
    if (result === undefined) {
        console.error(`Ошибка! Сервер ${selectIp} не найден в кластере`)
    }
    else {
        result.isOnline = !result.isOnline;
        console.log(`Статус сервера ${result.os} (${result.ip}) изменен. В сети: ${result.isOnline}`);
    }
}

toggleServer(myServers, inputUser());