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
    
    const clientsList = document.getElementById("clients-list");
    clientsList.innerHTML = `<option value="" selected required>Выберите клиента</option>`;
    axios.get(`${link}/get_clients`)
        .then(response => {
            let clients = response.data;
            clients.forEach(client => {
                let clientsOption = document.createElement("option");
                clientsOption.value = client.clients_id;
                clientsOption.innerHTML = client.clients_name;
                clientsList.appendChild(clientsOption);
            });
        });
    
    const productsList = document.getElementById("products-list");
    productsList.innerHTML = `<option value="" selected required>Выберите клиента</option>`;
    axios.get(`${link}/get_products`)
        .then(response => {
            let products = response.data;
            products.forEach(product => {
                let productsOption = document.createElement("option");
                productsOption.value = product.products_id;
                productsOption.innerHTML = product.products_name;
                productsList.appendChild(productsOption);
            });
        });

});