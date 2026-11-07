import { link, purchaseList } from "./supports.js";
document.getElementById("addForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const dataList = {
        clients: parseInt(document.getElementById("clients-list").value),
        products: parseInt(document.getElementById("products-list").value)
    }

    axios.post(`${link}/post_purchases`, dataList)
        .then(() => {
            document.getElementById("message").textContent = "Добавлено!";
            purchaseList();
        })
        .catch(() => document.getElementById("message").textContent = "Ошибка!");
});