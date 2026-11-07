import { link } from "./link.js";
document.getElementById("addForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const dataPurchases = {
        clients: parseInt(document.getElementById("clients-list").value),
        products: parseInt(document.getElementById("products-list").value)
    }
    
    axios.post(`${link}/post_purchases`, dataPurchases)
        .then(() => document.getElementById("message").textContent = `Добавлено!`)
        .catch(() => document.getElementById("message").textContent = `Ошибка!`);
}); 