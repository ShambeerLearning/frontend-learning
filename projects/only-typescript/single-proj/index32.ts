import promptSync from 'prompt-sync';
const prompt = promptSync();

function inputUser(): string {
    return prompt(`Вводите:  `);
}

type VpsServer = {
    id: string;
    region: string;
    os: string;
    price: number;
};

const serverList: VpsServer[] = [
    { id: "srv-1", region: "Netherlands", os: "Ubuntu", price: 300 },
    { id: "srv-2", region: "Germany", os: "Debian", price: 250 },
    { id: "srv-3", region: "Netherlands", os: "Windows", price: 800 },
    { id: "srv-4", region: "Finland", os: "Ubuntu", price: 200 }
];

function updateBilling(servers: VpsServer[], searchRegion: string, targetOs: string, markup: number): VpsServer[] {
    const filteredServers: VpsServer[] = (
        servers.filter((server) => {
            return server.region.toLowerCase().includes(searchRegion.toLowerCase());
        })
    )

    if (filteredServers.length === 0) {
        console.error(`Серверы не найдены`);
        return [];
    }

    return filteredServers.map((server) => {
        if (server.os.includes(targetOs.toLowerCase())) {
            return {
                ...server,
                price: server.price + markup,
            }
        }
        return server;
    })
        .sort((a: VpsServer, b: VpsServer) =>{
            return b.price - a.price
        });
}

console.table(serverList);
console.table(updateBilling(serverList, inputUser(), inputUser(), Number(inputUser())));