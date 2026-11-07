document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("showJson");
    userList.innerHTML = "";
    fetch("./users.json")
        .then(response => response.json())
        .then(data => {
            let userArray;
            if(Array.isArray(data)){
                userArray = data;
            }
            else {
                userArray = [data];
            }
            userArray.forEach(user => {
                let listItem = document.createElement("div");
                listItem.className = "user-card";
                listItem.innerHTML =
                    `
                    <div>Пользователь: ${user["name"]}</div>
                    <div>Возраст: ${user["age"]}</div>
                    <div>Должность: ${user["post"]}</div>
                    <div>Описание: ${user["description"]}</div>
                    `;
                userList.appendChild(listItem);
            });
        });
});
document.getElementById("forms").addEventListener("submit", async (event) => {
    event.preventDefault();
    const inputData = {
        name: document.getElementById("GetInputName").value,
        age: document.getElementById("GetInputAge").value,
        post: document.getElementById("GetInputPost").value,
        description: document.getElementById("GetInputDescription").value,
    };
    console.log(inputData);
});