const post_purchases =
    `
    INSERT INTO purchases 
    (purchases_clients, purchases_products)
    VALUES
    ($1, $2)
    RETURNING *;
    `;


export const post_querys = {
    post_purchases
}