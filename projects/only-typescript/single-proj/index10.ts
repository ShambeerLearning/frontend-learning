const MyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Успех");
    }, 1000);
});

async function runTimer() {
    console.log("Строка 1, зашли и ждем");
    const result = await MyPromise;
    console.log("Строка 2 - промис ответил: " + result);
}

runTimer();

console.log("Строка 3")