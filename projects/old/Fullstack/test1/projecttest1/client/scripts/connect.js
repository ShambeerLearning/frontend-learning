document.addEventListener("DOMContentLoaded", () => {
    const purchasesList = document.getElementById("purchases-list")
    purchasesList.innerHTML = '';
    axios.get("http://localhost:3000/superma").then(response => {
        let purchases = response.data;
        purchases.forEach(purchase => {
            let listItem = document.createElement("div");
            listItem.innerHTML = `
            <div>ID: ${purchase.purchases_id}</div>
            <div>Имя покупателя: ${purchase.purchases_customer}</div>
            <div>Товар: ${purchase.purchases_product}</div>
            <div>Количетсво товара: ${purchase.purchases_quantity_product}</div>
            <div>Цена: ${purchase.purchases_price}</div>
            <hr>`;
            purchasesList.appendChild(listItem)
        });
    });
});

document.getElementById("purchasesForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const purchases_customer = parseInt(document.getElementById("purchases_customer").value);
    const purchases_product = parseInt(document.getElementById("purchases_product").value);
    const purchases_quantity_products = parseInt(document.getElementById("purchases_quantity_product").value);
    const purchases_price = parseInt(document.getElementById("purchases_price").value);

    axios.post("http://localhost:3000/addsuperma", {purchases_customer, purchases_product, purchases_quantity_products, purchases_price})
        .then(() => {document.getElementById("message").textContent = "Добавлено!";
        location.reload();})
        .catch(() => document.getElementById("message").textContent = "Ошибка");
});