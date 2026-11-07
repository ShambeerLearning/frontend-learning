document.addEventListener("DOMContentLoaded", () => {
    const clientLists = document.getElementById("clientget-list");
    clientLists.innerHTML = "";
    axios.get("http://localhost:3000/api/clients/get_full")
        .then(response => {
            let clients = response.data;
            console.table(response.data);
            clients.forEach(client => {
                let listItem = document.createElement("div");
                listItem.className = "card_item";
                listItem.innerHTML =
                    `
                    <div>Номер клиента: ${client.client_id}</div>
                    <div>Имя клиента: ${client.client_name}</div>
                    <div>Телефон клиента: ${client.client_number}</div>
                    <div>Почта клиента: ${client.client_email}</div>
                    `
                clientLists.appendChild(listItem);
            });
        });
});