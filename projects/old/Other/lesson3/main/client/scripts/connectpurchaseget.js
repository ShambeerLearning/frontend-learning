document.addEventListener("DOMContentLoaded", () => {
    const negrsList = document.getElementById("negr-list");
    negrsList.innerHTML = "";
    axios.get("http://localhost:3000/api/purchases/get_full")
        .then(response => {
            let negrs = response.data;
            negrs.forEach(negr => {
                let listItem = document.createElement("div");
                listItem.className = "card_item";
                listItem.innerHTML =
                `
                <div>Номер заказа: ${negr["Номер покупки"]}</div>
                <div>Клиент: ${negr["Имя клиента"]}</div>
                <div>Имя негра: ${negr["Имя негра"]}</div>
                <div>Итоговая цена: ${negr["Цена негра"]}</div>
                `
                negrsList.appendChild(listItem);
            });
        });
});