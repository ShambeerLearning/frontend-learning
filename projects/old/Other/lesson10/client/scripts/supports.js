export const link = `http://localhost:3000`;

export function purchaseList() {
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
                    <button class="DeleteButton" data-id="${purchase["Номер заказа"]}">Удалить</button>
                    <hr>
                    `;
                purchasesList.appendChild(listItem);
            });
        });
    }