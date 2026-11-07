document.addEventListener('DOMContentLoaded', () => {
    const post_data = document.getElementById('post-data');
    post_data.addEventListener('click', async (event) => {
        event.preventDefault();
        const negr_name = document.getElementById('negr-name').value;
        const negr_post = document.getElementById('negr-post').value;
        const negr_history = document.getElementById('negr-history').value;
        const negr_price = document.getElementById('negr-price').value;
        const data = {
            negr_name: negr_name,
            negr_post: negr_post,
            negr_history: negr_history,
            negr_price: negr_price,
          };
        try {
            const response = await axios.post('http://localhost:3000/sellnegr', data);
        } catch (error) {
            console.error(`Не удалось отправить запрос на сервер`, error);
        }
    });
});