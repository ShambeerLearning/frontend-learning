import { link } from "./support.js";
document.addEventListener(`DOMContentLoaded`, () => {
    const purchasesEdit = document.getElementById(`purchases-edit`);
    purchasesEdit.innerHTML = `<option value="" selected required>Выберите заказ для редактирования</option>`;
    axios.get(`${link}/get_purchases_id`)
        .then(response => {
            let editpurchases = response.data;
            editpurchases.forEach(editpurchase => {
                let purchasesEditOption = document.createElement(`option`);
                purchasesEditOption.value = editpurchase.purchases_id;
                purchasesEditOption.innerHTML = editpurchase.purchases_id;
                purchasesEdit.appendChild(purchasesEditOption);
            });
        })
        .catch(() => alert(`Ашыбк при получении заказов на редактирование!`));
    
    const clientsEdit = document.getElementById(`clients-edit`);
    clientsEdit.innerHTML = `<option value="" selected required>Выберите клиента</option>`;
    axios.get(`${link}/get_clients`)
        .then(response => {
            let editclients = response.data;
            editclients.forEach(editclient => {
                let clientsEditOption = document.createElement(`option`);
                clientsEditOption.value = editclient.clients_id;
                clientsEditOption.innerHTML = editclient.clients_name;
                clientsEdit.appendChild(clientsEditOption);
            });
        })
        .catch(() => alert(`Ашыбк при получении клиентов на редактирование!`));
    
    const productsEdit = document.getElementById(`products-edit`);
    productsEdit.innerHTML = `<option value="" selected required>Выберите продукт</option>`;
    axios.get(`${link}/get_products`)
        .then(response => {
            let editproducts = response.data;
            editproducts.forEach(editproduct => {
                let productsEditOption = document.createElement(`option`);
                productsEditOption.value = editproduct.products_id;
                productsEditOption.innerHTML = editproduct.products_name;
                productsEdit.appendChild(productsEditOption);
            });
        })
        .catch(() => alert(`Ашыбк при получении продуктов на редактирование!`));
});

document.getElementById(`editForm`).addEventListener(`submit`, async (event) => {
    event.preventDefault();
    const id = parseInt(document.getElementById(`purchases-edit`).value);
    const dataEdit = {
        clients: parseInt(document.getElementById(`clients-edit`).value),
        products: parseInt(document.getElementById(`products-edit`).value)
    }
    if (confirm(`Вы точно хотите изменить заказ №${id}?`)) {
        axios.put(`${link}/update_purchases/${id}`, dataEdit, [id])
            .then(() => alert(`Заказ №${id} был успешно изменён!`))
            .catch(() => alert(`Ашыбк при изменении заказа №${id}!`));
    } else {
        alert(`Вы отменили изменение заказа №${id}!`);
    }
});