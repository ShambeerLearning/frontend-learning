fetch("./cfg.json")
.then(response => response.json())
.then(data => {
    console.log(data["number"]);
});

document.addEventListener("DOMContentLoaded", () => {
    let jsonUp = document.getElementById("jsonup");
    jsonUp.innerHTML = "";
    let listItem = document.createElement("div");
    listItem.innerHTML = `Количество: ${}`
})
