document.addEventListener("DOMContentLoaded", () => {
    const orderList = document.getElementById("orders-list");
    orderList.innerHTML = "";
    axios.get("http://localhost:3000/cpp_orders")
        .then(response => {
            let orders = response.data;
            orders.forEach(order => {
                let listItem = document.createElement("div");
                listItem.className = "ordercss";
                listItem.innerHTML = `
                <div>ID: ${order.order_id}</div>
                <div>Клиент: ${order.client}</div>
                <div>Продукт: ${order.product}</div>
                <div>Поставщик: ${order.provider}</div>
                <div>Цена: ${order.price}</div>`;
                orderList.appendChild(listItem);
            });
        });
});