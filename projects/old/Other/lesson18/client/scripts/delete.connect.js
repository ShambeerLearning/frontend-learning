import { link } from "./support.js";
document.addEventListener(`DOMContentLoaded`, () => {
    const purchasesDelete = document.getElementById(`purchases-delete`);
    purchasesDelete.innerHTML = `<option value="" selected required>Выберите заказ для удаление</option>`;
    axios.get(`${link}/get_purchases_id`)
        .then(response => {
            let deletepurchases = response.data;
            deletepurchases.forEach(deletepurchase => {
                let purchasesDeleteOption = document.createElement(`option`);
                purchasesDeleteOption.value = deletepurchase.purchases_id;
                purchasesDeleteOption.innerHTML = deletepurchase.purchases_id;
                purchasesDelete.appendChild(purchasesDeleteOption);
            });
        })
        .catch(() => alert(`Ошибка при получении заказов на удаление!`));
});

document.getElementById(`deleteForm`).addEventListener(`submit`, async (event) => {
    event.preventDefault();
    const id = parseInt(document.getElementById(`purchases-delete`).value);
    if (confirm(`Вы точно хотите удалить заказа №${id}?`)) {
        axios.delete(`${link}/delete_purchases/${id}`, [id])
            .then(() => alert(`Заказ №${id} успешно удалён!`))
            .catch(() => alert(`Ошибка при удалении заказа №${id}`));
    } else {
        alert(`Вы отменили удаление заказа №${id}!`);
    }
});