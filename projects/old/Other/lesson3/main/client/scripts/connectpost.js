function showTempMessage(element, message) {
    element.textContent = message;
    element.style.display = 'block';
    setTimeout(() => {
        element.style.display = 'none';
    }, 1000); // Скрыть через 1 секунду
}

document.addEventListener("DOMContentLoaded", async () => {
    const clientsData = await axios.get("http://localhost:3000/api/clients/id_and_name")
    console.table(clientsData.data);
    const negrsData = await axios.get("http://localhost:3000/api/negrs/id_and_name")
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
        const datanegrs = {
            client: parseInt(clientName.value),
            negr: parseInt(negrName.value),
            price: parseInt(priceNegr.value)
        };
        axios.post("http://localhost:3000/api/purchases/post_all", datanegrs)
        .then(() => showTempMessage(document.getElementById("message"), "Добавлено!"))
        .catch(() => showTempMessage(document.getElementById("message"), "Ошибка!"));
    });
});

const clientsaddForm = document.getElementById("clientaddForm");
clientsaddForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const clientsname = document.getElementById("client-name").value;
    const clientsnumber = document.getElementById("client-number").value;
    const clientsemail = document.getElementById("client-email").value;
    dataclient = {
        name: clientsname,
        number: clientsnumber,
        email: clientsemail
    };
    console.log(dataclient);
    axios.post("http://localhost:3000/api/clients/post_all", dataclient)
        .then(() => showTempMessage(document.getElementById("message"), "Добавлено!"))
        .catch(() => showTempMessage(document.getElementById("message"), "Ошибка!"));
});

const negrsaddForm = document.getElementById("negraddForm");
negrsaddForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const negrname = document.getElementById("negr-name").value;
    const negrpost = document.getElementById("negr-post").value;
    const negrhistory = document.getElementById("negr-history").value;
    const negrage = document.getElementById("negr-age").value;
    datanegrs = {
        name: negrname,
        post: negrpost,
        history: negrhistory,
        age: negrage
    };
    axios.post("http://localhost:3000/api/negrs/post_all", datanegrs)
        .then(() => showTempMessage(document.getElementById("message"), "Добавлено!"))
        .catch(() => showTempMessage(document.getElementById("message"), "Ошибка!"));
});