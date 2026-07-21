type BaseServer = {
    ip: string;
    os: string;
}

type VpnNode = BaseServer & {
    vpnProtocol: string;
    ping: number;
}

const activeNodes: VpnNode[] = [
    { ip: "192.168.1.10", os: "Arch", vpnProtocol: "ZeroTier", ping: 45 },
    { ip: "10.0.0.5", os: "Debian", vpnProtocol: "WireGuard", ping: 120 },
    { ip: "172.16.0.2", os: "CachyOS", vpnProtocol: "ZeroTier", ping: 15 }
]

function checkNodeStatus({ip, os, ping}: VpnNode): void {
    if (ping > 100) {
        console.warn(`Внимание: узел ${ip} на ${os} тормозит! Пинг: ${ping}`)
    }
    else {
        console.log(`Узел ${ip} работает стабильно`)
    }
}

console.log()
activeNodes.forEach(checkNodeStatus)