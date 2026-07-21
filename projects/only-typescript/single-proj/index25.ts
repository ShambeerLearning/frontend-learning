import promptSync from 'prompt-sync';
const prompt = promptSync();

function inputUser(): string {
    return prompt(`Введите имя пользователя: `);
}

type VpnSession = {
    username: string;
    ip: string;
    megabytesTransferred: number;
}

const sessionsLogin: VpnSession[] = [
    { username: "laijara", ip: "10.0.0.2", megabytesTransferred: 150 },
    { username: "admin", ip: "10.0.0.1", megabytesTransferred: 10 },
    { username: "laijara", ip: "10.0.0.3", megabytesTransferred: 320 },
    { username: "guest", ip: "10.0.0.4", megabytesTransferred: 5 }
]

function getUserTraffic(sessions: VpnSession[], findUser: string): number {
    const allTrafficUser: number = sessions
        .filter((session: VpnSession) => session.username === findUser)
        .reduce((acc: number, userTraffic: VpnSession): number => acc + userTraffic.megabytesTransferred, 0);
    if (allTrafficUser === 0) {
        console.warn(`Внимание: Пользователь ${findUser} не найден или не потратил трафик`);
        return 0;
    }
    return allTrafficUser;
}

console.log(getUserTraffic(sessionsLogin, inputUser()));