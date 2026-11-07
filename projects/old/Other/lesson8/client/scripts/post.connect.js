import { link } from "./link.js";

document.getElementById("postForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const dataForm = {
        clientName: document.getElementById("client-name").value,
        productName: document.getElementById("product-name").value
    };
    axios.post(`${link}/post_purchases`, dataForm)
        .then(() => document.getElementById("message").textContent = "Добавлено")
        .catch(() => document.getElementById("message").textContent = "Ошибка");
});