import { LINK } from "./system/link.front.js";

document.addEventListener("DOMContentLoaded", () => {
    const negrList = document.getElementById("negrget-list");
    negrList.innerHTML = "";
    axios.get(`${LINK}/api/negrs/get_full`)
        .then(response => {
            let negrs = response.data;
            negrs.forEach(negr => {
                let listItem = document.createElement("div");
                listItem.className = "card_item";
                listItem.innerHTML =
                    `
                    <div>Номер негра: ${negr.negrs_id}</div>
                    <div>Имя негра: ${negr.negrs_name}</div>
                    <div>Должность негра: ${negr.negrs_post}</div>
                    <div>История негра: ${negr.negrs_history}</div>
                    <div>Возраст негра: ${negr.negrs_age}</div>
                    `
                negrList.appendChild(listItem);
            });
        });
});