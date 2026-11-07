import { link } from "./link.js"

document.addEventListener("DOMContentLoaded", () => {
    const purchasesList = document.getElementById("purchases-list");
    purchasesList.innerHTML = "";
    axios.get(`${link}/get_purchases`)
        .then(response => {
            let purchases = response.data;
            purchases.forEach(purchase => {
                let listItem = document.createElement("div");
                listItem.innerHTML =
                    `
                    <div>Номер заказа: ${purchase["ID"]}</div>
                    <div>Имя клиента: ${purchase["Имя клиента"]}</div>
                    <div>Название продукта: ${purchase["Название продукта"]}</div>
                    <hr>
                    `;
                purchasesList.appendChild(listItem);
            });
        });
});