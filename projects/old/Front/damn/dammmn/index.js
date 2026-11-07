let a = 0;

document.addEventListener("DOMContentLoaded", () => {
    const message = document.getElementById("output");
    message.style.visibility = "hidden";
});

document.getElementById("inputForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    a = document.getElementById("writeInput").value;
    if (a == 0) {
        alert(`Введи имя, сука!`);
    }
    else {
        const message = document.getElementById("output");
        message.style.visibility = "visible";
        message.innerText = `Привет ${a}, иди нахуй!!!`;
    }
});