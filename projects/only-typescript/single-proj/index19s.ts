type SwitchType = "red" | "blue" | "brown";
type Connection = "wired" | "wireless";

type Keyboard = {
    brand: string;
    switches: SwitchType;
    connection: Connection;
    hasPBT: boolean;
    price: number;
}

const storeInventory: Keyboard[] = [
    { brand: "Dark Project", switches: "red", connection: "wired", hasPBT: true, price: 8000 },
    { brand: "Red Square Alumix", switches: "brown", connection: "wireless", hasPBT: true, price: 6500 },
    { brand: "Logitech", switches: "blue", connection: "wireless", hasPBT: false, price: 5000 }
]

function getPremiumWireless(keyboard: Keyboard[]): string[] {
        return keyboard
            .filter(({connection, hasPBT}: Keyboard): boolean => hasPBT && connection === "wireless")
            .map(({ brand }: Keyboard): string => brand)
}

console.log(getPremiumWireless(storeInventory));