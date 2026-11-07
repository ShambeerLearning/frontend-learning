import { link } from "./support.js";

document.addEventListener("DOMContentLoaded", () => {
    const purchasesDelete = document.getElementById("number-delete");
    purchasesDelete.innerHTML = `<option value="" selected required>Выберите номер заказа</option>`;
    axios.get(`${link}/get_purchases_id`)
        .then(response => {
            let purchases = response.data;
            purchases.forEach(purchase => {
                let purchasesDeleteOption = document.createElement("option");
                purchasesDeleteOption.value = purchase.purchases_id;
                purchasesDeleteOption.innerHTML = purchase.purchases_id;
                purchasesDelete.appendChild(purchasesDeleteOption);
            });
        });
});

document.getElementById("deleteForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const id = parseInt(document.getElementById("number-delete").value);
    const dataDelete = {
        number: parseInt(document.getElementById("number-delete").value)
    }
    
    if (confirm(`Вы уверены, что хотите удалить заказа №${id}?`)) {
        axios.delete(`${link}/delete_purchases/${id}`, dataDelete)
            .then(() => alert(`Успешно удалено!`))
            .catch(() => alert(`Ашыбк!`));
    } else {
        alert(`Вы отменили удаление заказа!`);
    }
})