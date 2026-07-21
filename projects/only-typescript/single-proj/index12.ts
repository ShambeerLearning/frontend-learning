    interface GameEntity{
        name: string,
        type: string,
        threatLevel: number,
        isLoaded: boolean,
        traits: string[];
    }

    const serverData: GameEntity[] = [
        { name: "Zombie", type: "undead", threatLevel: 15, isLoaded: true, traits: ["slow", "green"] },
        { name: "The Man From The Fog", type: "horror_mod", threatLevel: 100, isLoaded: true, traits: ["distorted Steve model", "large mouth", "jumpscare"] },
        { name: "Cow", type: "animal", threatLevel: 0, isLoaded: false, traits: ["horns", "hooves"] },
        { name: "Creeper", type: "monster", threatLevel: 60, isLoaded: true, traits: ["explosive", "silent"] }
    ]

    function fetchServerEntities(): Promise<GameEntity[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(serverData);
            }, 2000);
        });
    }

    async function runServerDiagnostics() {
        try {
            console.log("Подключение к серверу");
            const entitiesMass: GameEntity[] = await fetchServerEntities();
            const bossEntitity: GameEntity | undefined = (
                entitiesMass.find((bossMob) => bossMob.name === "The Man From The Fog")
            )
            console.log(`Босс среди: ${bossEntitity?.name}`)

            const warningLog: string[] = (
                entitiesMass
                    .filter((dangerMob) => dangerMob.isLoaded && dangerMob.threatLevel > 20)
                    .map(dangerMob => `Внимание: ${dangerMob.name} рядом!`)
            )
            console.log(warningLog);

            const totalThreats: number = (
                entitiesMass
                    .filter(loadMob => loadMob.isLoaded)
                    .reduce((acc, loadMob) => acc + loadMob.threatLevel, 0)
            )
            console.log(`Общая оценка опасности: ${totalThreats}`);
        }
        catch (error) {
            console.error(error);
        }
    }

    runServerDiagnostics();
    console.log("Что-то делаем, пока данные загружаются");