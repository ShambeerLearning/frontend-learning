import { link } from "./support.js";

document.addEventListener("DOMContentLoaded", () => {
    const numbersList = document.getElementById("numbers-list");
    numbersList.innerHTML = `<option value="" required selected>Выберите продукт</option>`;
    axios.get(`${link}/get_purchases_id`)
        .then(response => {
            let numbers = response.data;
            numbers.forEach(number => {
                let numbersOption = document.createElement("option");
                numbersOption.value = number.purchases_id;
                numbersOption.innerHTML = number.purchases_id;
                numbersList.appendChild(numbersOption);
            });
        });
});

document.getElementById("deleteForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const id = parseInt(document.getElementById("numbers-list").value);
    if (confirm(`Вы точно хотите удалить заказ №${id}?`)) {
        axios.delete(`${link}/delete_purchases/${id}`, id)
            .then(() => alert(`Заказ №${id} успешно удалён!`))
            .catch(() => alert(`Ашыбк при удалении заказа №${id}!`));
    } else {
        alert(`Вы отменили удаление заказа №${id}!`);
    }
});