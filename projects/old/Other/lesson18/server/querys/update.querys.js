const update_purchases =
    `
    UPDATE purchases
    SET purchases_clients = $1, purchases_products = $2
    WHERE purchases_id = $3
    RETURNING *;
    `;


export const update_querys = {
    update_purchases
}