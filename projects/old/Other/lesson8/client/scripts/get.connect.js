import { link } from "./link.js";

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
                    <div>Номер заказа: ${purchase["Номер заказа"]}</div>
                    <div>Имя клиента: ${purchase["Имя клиента"]}</div>
                    <div>Название продукта: ${purchase["Название продукта"]}</div>
                    <hr>
                    `;
                purchasesList.appendChild(listItem);
            });
        });
    
    const clientsList = document.getElementById("client-name");
    clientsList.innerHTML = `<option value="" selected="selected" required>Выберите клиента</option>`;
    axios.get(`${link}/get_clients`)
        .then(response => {
            let clients = response.data;
            clients.forEach(client => {
                let clientOption = document.createElement("option");
                clientOption.value = parseInt(client.clients_id);
                clientOption.innerHTML = client.clients_name;
                clientsList.appendChild(clientOption);
            });
        });
    
    const productList = document.getElementById("product-name");
    productList.innerHTML = `<option value="" selected="selected" required>Выберите продукт</option>`;
    axios.get(`${link}/get_products`)
        .then(response => {
            let products = response.data;
            products.forEach(product => {
                let productOption = document.createElement("option");
                productOption.value = parseInt(product.products_id);
                productOption.innerHTML = product.products_name;
                productList.appendChild(productOption);
            });
        });
});