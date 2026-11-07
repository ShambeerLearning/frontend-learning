import { LINK } from "./system/link.front.js";

function showTempMessage(element, message) {
    element.textContent = message;
    element.style.display = 'block';
    setTimeout(() => {
        element.style.display = 'none';
    }, 1000); // Скрыть через 1 секунду
}

document.addEventListener("DOMContentLoaded", async () => {
    const clientsData = await axios.get(`${LINK}/api/clients/id_and_name`)
    console.table(clientsData.data);
    const negrsData = await axios.get(`${LINK}/api/negrs/id_and_name`)
    console.table(negrsData.data);
    const clientName = document.getElementById("clientName");
    const negrName = document.getElementById("negrName");

    clientsData.data.forEach((client) => {
        const clientOption = document.createElement("option");
        clientOption.innerHTML = client.client_name;
        clientOption.value = client.client_id;
        clientName.appendChild(clientOption);
    });
    
    negrsData.data.forEach((negrs) => {
        const negrsOption = document.createElement("option");
        negrsOption.innerHTML = negrs.negrs_name;
        negrsOption.value = negrs.negrs_id;
        negrName.appendChild(negrsOption);
    });
    
    const formAddPurchases = document.getElementById("negrsellForm");
    formAddPurchases.addEventListener("submit", (event) => {
        event.preventDefault();
        const priceNegr = document.getElementById("priceNegr");
        const datapurchases = {
            client: parseInt(clientName.value),
            negr: parseInt(negrName.value),
            price: parseInt(priceNegr.value)
        };
        axios.post(`${LINK}/api/purchases/post_all`, datapurchases)
        .then(() => showTempMessage(document.getElementById("message"), "Добавлено!"))
        .catch(() => showTempMessage(document.getElementById("message"), "Ошибка!"));
    });
});

const clientsaddForm = document.getElementById("clientaddForm");
clientsaddForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const clientsname = document.getElementById("client-name");
    const clientsnumber = document.getElementById("client-number");
    const clientsemail = document.getElementById("client-email");
    const dataforclients = {
        name: clientsname.value,
        number: clientsnumber.value,
        email: clientsemail.value
    };
    axios.post(`${LINK}/api/clients/post_all`, dataforclients)
        .then(() => showTempMessage(document.getElementById("message"), "Добавлено!"))
        .catch(() => showTempMessage(document.getElementById("message"), "Ошибка!"));
});

const negrsaddForm = document.getElementById("negraddForm");
negrsaddForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const negrname = document.getElementById("negr-name");
    const negrpost = document.getElementById("negr-post");
    const negrhistory = document.getElementById("negr-history");
    const negrage = document.getElementById("negr-age");
    const datafornegrs = {
        name: negrname.value,
        post: negrpost.value,
        history: negrhistory.value,
        age: negrage.value
    };
    axios.post(`${LINK}/api/negrs/post_all`, datafornegrs)
        .then(() => showTempMessage(document.getElementById("message"), "Добавлено!"))
        .catch(() => showTempMessage(document.getElementById("message"), "Ошибка!"));
});