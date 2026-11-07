import { link, purchasesList } from "./support.js";
document.addEventListener("DOMContentLoaded", () => {
    purchasesList();
    
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
    productsList.innerHTML = `<option value="" selected required>Выберите продукт</option>`;
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
    
    function DeleteButton() {
        const purchasesMass = document.getElementById("purchases-list");
        purchasesMass.addEventListener("click", async (event) => {
        const id = event.target.getAttribute("data-id");
        if (event.target.classList.contains("DeleteButton")) {
            if (confirm("Вы уверены?")) {
                axios.delete(`${link}/delete_purchases/${id}`)
                    .then(() => {
                        document.getElementById("message").textContent = `Успешно удалено!`;
                        purchasesList();
                    })
                    .catch(() => document.getElementById("message").textContent = `Ошибка при удалении!`);
                }
            }
        });
    }
    DeleteButton();
    
});