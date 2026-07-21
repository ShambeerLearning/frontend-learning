interface Spaceship{
    model: string;
    speed: number;
    hasHyperdrive: boolean;
}

const baseFleet: Spaceship[] = [
    { model: "Разведчик", speed: 150, hasHyperdrive: false },
    { model: "Грузовик", speed: 50, hasHyperdrive: false },
    { model: "Истребитель", speed: 200, hasHyperdrive: false }
]

const hyperFleet = (
    baseFleet.map((ship) => {
        return {
            ...ship,
            speed: ship.speed * 10,
            hasHyperdrive: true,
        }
    })
)

function launchShip({model, speed}: Spaceship): void {
    console.log(`Внимание! Корабль ${model} вошёл в гиперпространство на скорости ${speed}`)
}

hyperFleet.forEach((allShips) => launchShip(allShips))