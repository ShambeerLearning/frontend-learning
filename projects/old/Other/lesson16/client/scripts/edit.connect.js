import { link } from "./support.js";

document.addEventListener("DOMContentLoaded", () => {
    const clientsEdit = document.getElementById("clients-edit");
    clientsEdit.innerHTML = `<option value="" selected required>Выберите клиента</option>`;
    axios.get(`${link}/get_clients`)
        .then(response => {
            let clientsEdits = response.data;
            clientsEdits.forEach(clientEdits => {
                let clientOptionEdit = document.createElement("option");
                clientOptionEdit.value = clientEdits.clients_id;
                clientOptionEdit.innerHTML = clientEdits.clients_name;
                clientsEdit.appendChild(clientOptionEdit);
            });
        });
    
    const productsEdit = document.getElementById("products-edit");
    productsEdit.innerHTML = `<option value="" selected required>Выберите продукт</option>`;
    axios.get(`${link}/get_products`)
        .then(response => {
            let productsEdits = response.data;
            productsEdits.forEach(productEdits => {
                let productsOptionEdit = document.createElement("option");
                productsOptionEdit.value = productEdits.products_id;
                productsOptionEdit.innerHTML = productEdits.products_name;
                productsEdit.appendChild(productsOptionEdit);
            });
        });
    
    const numberEdit = document.getElementById("number-edit");
    numberEdit.innerHTML = `<option value="" selected required>Выберите номер заказа</option>`;
    axios.get(`${link}/get_purchases_id`)
        .then(response => {
            let numbers = response.data;
            numbers.forEach(number => {
                let numberOption = document.createElement("option");
                numberOption.innerHTML = number.purchases_id;
                numberOption.value = number.purchases_id;
                numberEdit.appendChild(numberOption);
            });
        });
});

document.getElementById("editForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const dataEdit = {
        clients: parseInt(document.getElementById("clients-edit").value),
        products: parseInt(document.getElementById("products-edit").value)
    }
    const id = parseInt(document.getElementById("number-edit").value);

    if (confirm(`Вы уверены, что хотите изменить заказ №${id}?`)) {
        axios.put(`${link}/put_purchases/${id}`, dataEdit)
            .then(() => alert(`Успешно!`))
            .catch(() => alert(`Ашыбк!`));
    } else {
        alert(`Вы отменили изменение заказа!`);
    }
});