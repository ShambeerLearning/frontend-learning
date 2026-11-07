import { link } from "./support.js";
document.getElementById("addForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const purchasesData = {
        clients: parseInt(document.getElementById("clients-list").value),
        products: parseInt(document.getElementById("products-list").value)
    }
    axios.post(`${link}/post_purchases`, purchasesData)
        .then(() => document.getElementById("message").textContent = `Успешно!`)
        .catch(() => document.getElementById("message").textContent = `Ошибка!`);
});