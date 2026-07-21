import promptSync from 'prompt-sync';
const prompt = promptSync();

interface User {
    name: string;
    age: number;
    isBanned: boolean;
}

function checkAccess(user: User) {
    if (user.isBanned) {
        return `Пользователю ${user.name} доступ запрещен: пользователь в бане`;
    }
    else if (user.age < 18) {
        return `Пользователю ${user.name} доступ запрещен: возрастное ограничение`;
    }
    else {
        return `Доступ разрешен. Добро пожаловать, ${user.name}`;
    }
}

const currentUser: User = {name: "John", age: 35, isBanned: false};
const currentUser2: User = {name: "Abama", age: 30, isBanned: true};
const currentUser3: User = {name: "Julie", age: 17, isBanned: false};

console.log(checkAccess(currentUser));
console.log(checkAccess(currentUser2));
console.log(checkAccess(currentUser3));