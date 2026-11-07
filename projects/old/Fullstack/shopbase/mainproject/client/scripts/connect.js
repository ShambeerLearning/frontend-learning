document.addEventListener('DOMContentLoaded', () => {
    const actList = document.getElementById('acts-list');
    actList.innerHTML = '';
    axios.get('http://localhost:3000/act_sale')
        .then(response => {
            let acts = response.data;
            acts.forEach(act => {
                let listItem = document.createElement('div');
                listItem.innerHTML =
                    `<div>Id: ${act.id}</div>
                     <div>Продукт: ${act.product}</div>
                     <div>Клиент: ${act.act_sale_clients}</div>
                     <div>Продавец: ${act.act_sale_providers}</div>
                     <hr>`;
                actList.appendChild(listItem);
            });
        });
});