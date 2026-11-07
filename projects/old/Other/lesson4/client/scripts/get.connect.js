document.addEventListener("DOMContentLoaded", () => {
    const nameList = document.getElementById("name-list");
    nameList.innerHTML = "";
    axios.get("http://localhost:3000/all")
        .then(response => {
            let names = response.data;
            console.log(names);
            names.forEach(name => {
                let listItem = document.createElement("div");
                listItem.innerHTML =
                    `
                    <div>ID: ${name["ID"]}</div>
                    <div>Имя: ${name["Имя"]}</div>
                    <div>Фамилия: ${name["Фамилия"]}</div>
                    <hr>
                    `;
                nameList.appendChild(listItem);
            });
        });
});