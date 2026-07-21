type User = {
    name: string;
    age: number;
}

type Client = User & {
    email: string;
}

const client: Client = {
    name: "da",
    age: 35,
    email: "feb"
}

const daun: Client = {
    ...client,
    age: 34,
}

console.table(client);
console.table(daun);