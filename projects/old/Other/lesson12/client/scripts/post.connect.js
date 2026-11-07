import { link } from "./link.js"
document.getElementById("addForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const dataPuchases = {
        clients: parseInt(document.getElementById("clients-list").value),
        products: parseInt(document.getElementById("products-list").value)
    }
    axios.post(`${link}/post_purchases`, dataPuchases)
        .then(() => document.getElementById("message").textContent = "Добавлено!")
        .catch(() => document.getElementById("message").textContent = "Ошибка!");
});