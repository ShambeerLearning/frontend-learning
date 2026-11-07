import { link } from "./support.js";
document.addEventListener(`DOMContentLoaded`, () => {
    const clientsList = document.getElementById(`clients-list`);
    clientsList.innerHTML = `<option value="" selected required>Выберите клиента</option>`;
    axios.get(`${link}/get_clients`)
        .then(response => {
            let clients = response.data;
            clients.forEach(client => {
                let clientsOption = document.createElement(`option`);
                clientsOption.value = client.clients_id;
                clientsOption.innerHTML = client.clients_name;
                clientsList.appendChild(clientsOption);
            });
        })
        .catch(() => alert(`Ошибка при получении списка клиентов на добавление!`));
    
    const productsList = document.getElementById(`products-list`);
    productsList.innerHTML = `<option value="" selected required>Выберите продукт</option>`;
    axios.get(`${link}/get_products`)
        .then(response => {
            let products = response.data;
            products.forEach(product => {
                let productsOption = document.createElement(`option`);
                productsOption.value = product.products_id;
                productsOption.innerHTML = product.products_name;
                productsList.appendChild(productsOption);
            });
        })
        .catch(() => alert(`Ошибка при получени списка продуктов на добавление!`));
});

document.getElementById(`addForm`).addEventListener(`submit`, async (event) => {
    event.preventDefault();
    const dataPurchases = {
        clients: parseInt(document.getElementById(`clients-list`).value),
        products: parseInt(document.getElementById(`products-list`).value)
    }
    if (confirm(`Вы уверены, что хотите добавить заказ?`)) {
        axios.post(`${link}/post_purchases`, dataPurchases)
            .then(() => alert(`Заказ добавлен!`))
            .catch(() => alert(`Ашыбк при добавлении заказа!`));
    } 
});