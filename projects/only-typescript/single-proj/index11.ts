function fetchUserProfile(): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Джон Доу");
        }, 2000);
    });
}

async function loadProfile() {
    console.log("Вытаскиваем данные");
    const result: string = await fetchUserProfile();
    console.log("Данные пользователя: " + result);
}

loadProfile();
console.log("В процессе вытягивание")