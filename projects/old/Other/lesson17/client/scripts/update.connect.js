import { link } from "./support.js";

document.addEventListener("DOMContentLoaded", () => {
    const numbersEdit = document.getElementById("numbers-edit");
    numbersEdit.innerHTML = `<option value="" required selected>Выберите номер заказа</option>`;
    axios.get(`${link}/get_purchases_id`)
        .then(response => {
            let numbers = response.data;
            numbers.forEach(number => {
                let numbersEditOption = document.createElement("option");
                numbersEditOption.value = number.purchases_id;
                numbersEditOption.innerHTML = number.purchases_id;
                numbersEdit.appendChild(numbersEditOption);
            });
        });
    
    const clientsEdit = document.getElementById("clients-edit");
    clientsEdit.innerHTML = `<option value="" required selected>Выберите клиента</option>`;
    axios.get(`${link}/get_clients`)
        .then(response => {
            let clientsedit = response.data;
            clientsedit.forEach(clientedit => {
                let clientsEditOption = document.createElement("option");
                clientsEditOption.value = clientedit.clients_id;
                clientsEditOption.innerHTML = clientedit.clients_name;
                clientsEdit.appendChild(clientsEditOption);
            });
        });
    
    const productsEdit = document.getElementById("products-edit");
    productsEdit.innerHTML = `<option value="" required selected>Выберите продукт</option>`;
    axios.get(`${link}/get_products`)
        .then(response => {
            let productsedit = response.data;
            productsedit.forEach(productedit => {
                let productsEditOption = document.createElement("option");
                productsEditOption.value = productedit.products_id;
                productsEditOption.innerHTML = productedit.products_name;
                productsEdit.appendChild(productsEditOption);
            });
        });
});

document.getElementById("editForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const dataDelete = {
        clients: parseInt(document.getElementById("clients-edit").value),
        products: parseInt(document.getElementById("products-edit").value)
    }
    const id = parseInt(document.getElementById("numbers-edit").value);
    if (confirm(`Вы уверены, что хотите изменить заказа №${id}?`)) {
        axios.put(`${link}/update_purchases/${id}`, dataDelete, [id])
            .then(() => alert(`Заказ №${id} успешно изменён!`))
            .catch(() => alert(`Ашыбк при изменении заказа №${id}!`))
    } else {
        alert(`Вы отменили изменение заказа №${id}!`);
    }
});