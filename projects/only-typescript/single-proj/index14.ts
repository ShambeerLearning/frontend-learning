interface Weapon{
    title: string;
    damage: number;
    isEnchanted: boolean;
}

const basicWeapons: Weapon[] = [
    { title: "Деревянный меч", damage: 4, isEnchanted: false },
    { title: "Железный топор", damage: 9, isEnchanted: false },
    { title: "Каменная кирка", damage: 3, isEnchanted: false }
]

const magicWeapons = (
    basicWeapons.map((oldWeapons) => {
        return {
            ...oldWeapons,
            damage: oldWeapons.damage + 10,
            isEnchanted: true,
        }
    })
)

function printWeaponInfo({title, damage}: Weapon): void {
    console.log(`Магическое оружие: ${title} наносит: ${damage} урона!`)
}

magicWeapons.forEach(wpn => printWeaponInfo(wpn))