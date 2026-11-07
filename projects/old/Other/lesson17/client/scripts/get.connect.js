import { link } from "./support.js";

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
                    <div>Номер заказа: ${purchase.purchases_id}</div>
                    <div>Имя клиента: ${purchase.clients_name}</div>
                    <div>Название продукта: ${purchase.products_name}</div>
                    <hr>
                    `;
                purchasesList.appendChild(listItem);
            });
        });
});