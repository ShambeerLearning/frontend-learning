import { link } from "./link.js"
document.getElementById("addForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const dataPurchase = {
        clients: document.getElementById("clients-list").value,
        products: document.getElementById("products-list").value
    }

    axios.post(`${link}/post_purchases`, dataPurchase)
        .then(() => document.getElementById("message").textContent = "Добавлено!")
        .catch(() => document.getElementById("message").textContent = "Ошибка!");
});