import promptSync from 'prompt-sync';
const prompt = promptSync();

interface User {
    name: string;
    age: number;
    isBanned: boolean;
}

const users: User[] = [
    {name: "John", age: 35, isBanned: false},
    {name: "Abama", age: 30, isBanned: true},
    {name: "Julie", age: 19, isBanned: false},
    {name: "Jany", age: 7, isBanned: false},
    {name: "Feby", age: 8, isBanned: false},
];

function checkUser(users: User[]): number {
    return users
        .filter(user => !user.isBanned && user.age >= 18)
        .reduce((acc, user) => {
            return acc + user.age;
        }, 0);
}

const findChilds: User[] = users.filter(user => user.age < 18);

console.log(checkUser(users));
console.log();
console.log(findChilds);