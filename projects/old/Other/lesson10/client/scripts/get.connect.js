import { link, purchaseList } from "./supports.js";
document.addEventListener("DOMContentLoaded", () => {
    purchaseList();
    
    const clientsList = document.getElementById("clients-list");
    clientsList.innerHTML = `<option value="" required selected>Выберите клиента</option>`;
    axios.get(`${link}/get_clients`)
        .then(response => {
            let clients = response.data;
            clients.forEach(client => {
                let clientOption = document.createElement("option");
                clientOption.value = client.clients_id;
                clientOption.innerHTML = client.clients_name;
                clientsList.appendChild(clientOption);
            });
        });
    
    const productsList = document.getElementById("products-list");
    productsList.innerHTML = `<option value="" required selected>Выберите продукт</option>`;
    axios.get(`${link}/get_products`)
        .then(response => {
            let products = response.data;
            products.forEach(product => {
                let productsOption = document.createElement("option")
                productsOption.value = product.products_id;
                productsOption.innerHTML = product.products_name;
                productsList.appendChild(productsOption);
            });
        });
    
    function DeleteButton() {
        const purchasesMass = document.getElementById("purchases-list");
        purchasesMass.addEventListener("click", async (event) => {
            const id = event.target.getAttribute("data-id")
            if (event.target.classList.contains("DeleteButton")) {
                if (confirm("Вы уверены?")) {
                    axios.delete(`${link}/delete_purchases/${id}`)
                        .then(() => {
                            document.getElementById("message").textContent = "Удаление успешно!";
                            purchaseList();
                        })
                        .catch(() => document.getElementById("message").textContent = "Удаление провалено!");
                }
            }
        });
    }

    DeleteButton();
});