    interface Mob{
        name: string;
        health: number;
        isHostile: boolean;
        visualTraits: string[];
    }

    const mobs: Mob[] = [
        { name: "Cow", health: 10, isHostile: false, visualTraits: ["horns", "hooves"] },
        { name: "Zombie", health: 20, isHostile: true, visualTraits: ["green skin", "torn clothes"] },
        { name: "The Man From The Fog", health: 100, isHostile: true, visualTraits: ["distorted Steve model", "large mouth", "glowing eyes"] },
        { name: "Sheep", health: 8, isHostile: false, visualTraits: ["wool"] }
    ];

    function getDangerReport(mobs: Mob[]): string[]{
        return mobs
            .filter(mob => mob.health > 15 && mob.isHostile)
            .map(mob => `Опасно: ${mob.name} (HP: ${mob.health})`);
    }

    const totalTraitsCount: number = mobs.reduce((acc, mob) => acc + mob.visualTraits.length, 0);

    console.log(getDangerReport(mobs));
    console.log();
    console.log(totalTraitsCount);