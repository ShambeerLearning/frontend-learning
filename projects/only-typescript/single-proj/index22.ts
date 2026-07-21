import promptSync from 'prompt-sync';
const prompt = promptSync();

type TransitCard = {
    cardNumber: string;
    balance: number;
    isActive: boolean;
}

const myCard: TransitCard = {
    cardNumber: "0332-1111-2222",
    balance: 150,
    isActive: true,
}

function payFare(card: TransitCard, amount: number) {
    if (!card.isActive) {
        console.error(`Карта не активна!`);
        return;
    }
    else if(card.balance < amount) {
        console.error(`Ошибка! Недостаточно средств.`);
        if(card.balance <= 0) {
            card.isActive = false;
            console.error(`Ваша карта была заблокирована! Пополните баланс!`);
        }
    }
    else {
        card.balance = card.balance - amount;
        console.log(`Проезд оплачен. Остаток: ${card.balance}.`);
    }
}

function payCard(card: TransitCard) {
    let Cash: number = Number(prompt(`Введите пополняемую сумму - `));
    card.balance = card.balance + Cash;
    if(!card.isActive && card.balance > 0) {
        card.isActive = true;
    }
}

payFare(myCard, 150)
payFare(myCard, 150)
payCard(myCard)
payFare(myCard, 30);