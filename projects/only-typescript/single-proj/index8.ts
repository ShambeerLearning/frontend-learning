interface SystemService {
    name: string;
    isTelemetry: boolean;
    ramUsage: number;
}

const services: SystemService[] = [
    { name: "AudioSrv", isTelemetry: false, ramUsage: 15 },
    { name: "DiagTrack", isTelemetry: true, ramUsage: 45 },
    { name: "WbioServ", isTelemetry: false, ramUsage: 8 },
    { name: "dmwappushservice", isTelemetry: true, ramUsage: 25 },
];

function getServicesToDisable(services: SystemService[]): string[] {
    return services
        .filter(service => service.isTelemetry)
        .map(service => `Служба ${service.name} подлежит отключению`);
};

const freedRam: number = (
    services
        .filter(service => service.isTelemetry)
        .reduce((acc, service) => acc + service.ramUsage, 0)
);

console.log(getServicesToDisable(services));
console.log();
console.log(`Общее потребление памяти сервисов для отключения: ${freedRam}`);