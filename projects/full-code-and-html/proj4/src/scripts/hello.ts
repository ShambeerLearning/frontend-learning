import users from "../data/dataUser.json";

type User = {
    name: string;
    email: string;
    password: string;
}

function parseUser(user: User): string {
    return `
        <div class="card">
            <h2 class="texth2">Имя пользователя: ${user.name}</h2>
            <p class="textp">Почта пользователя: ${user.email}</p>
            <p class="textp">Пароль пользователя: ${user.password}</p>
        </div>
    `;
}

export const loadUsers: string[] = (
    users.map((user) => {
       return parseUser(user)
    })
);