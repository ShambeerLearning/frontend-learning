document.addEventListener('DOMContentLoaded', () => {
    const categoryList = document.getElementById('sellnegr');
    categoryList.innerHTML = '';
    axios.get('http://localhost:3000/sellnegr')
        .then(response => {
            let categories = response.data;
            categories.forEach(category => {
                let listItem = document.createElement('div');
                listItem.innerHTML =
                    `<div>ID Негра: ${category.negr_id}</div>
                <div>ИМЯ Негра: ${category.negr_name}</div>
                <div>ДОЛЖНОСТЬ Негра: ${category.negr_post}</div>
                <div>ИСТОРИЯ Негра: ${category.negr_history}</div>
                <div>ЦЕНА Негра: ${category.negr_price}</div>
                <hr>`;
                categoryList.appendChild(listItem);
            });
        });
});