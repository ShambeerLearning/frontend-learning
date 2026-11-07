let a = 0;

function PlaySoundsOfClicks(){
    function PlaySound(soundPath) {
        const audio = new Audio(soundPath);
        audio.play().catch(error => {
            console.log(`Ошибка воспроизведения звука: ${error}`);
        });
    }
    if (a % 10 !== 0) {
        PlaySound("./src_files/sounds/onec.mp3");
    }
    else if (a % 10 === 0 && a !== 0){
        PlaySound("./src_files/sounds/tenc.mp3");
    }
}

function updateInformation(){
    const clickList = document.getElementById("quantityClicks");
    clickList.innerHTML = "";
    let listItem = document.createElement("div");
    listItem.className = "quantityClicks1";
    listItem.innerHTML = `Количество кликов - ${a}`;
    clickList.appendChild(listItem);
}

document.addEventListener("DOMContentLoaded", () => {
    updateInformation();
});

document.getElementById("GodOfClickerButton").addEventListener("click", async (event) => {
    event.preventDefault();
    PlaySoundsOfClicks();
    a++;
    updateInformation();
});