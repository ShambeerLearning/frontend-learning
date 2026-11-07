import { link } from "./link.js";

document.addEventListener("DOMContentLoaded", () => {
    const purchasesList = document.getElementById("purchases-list");
    purchasesList.innerHTML = "";
    axios.get(`${link}/get_purchases`)
        .then(resopnse => {
            let purchases = resopnse.data;
            purchases.forEach(purchase => {
                let listItem = document.createElement("div");
                listItem.innerHTML =
                    `
                    <div>Номер заказа ${purchase["Номер заказа"]}</div>
                    <div>Имя клиента ${purchase["Имя клиента"]}</div>
                    <div>Название продукта ${purchase["Название продукта"]}</div>
                    <hr>
                    `;
                purchasesList.appendChild(listItem);
            });
        });
});