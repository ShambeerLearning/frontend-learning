const delete_purchase =
    `
    DELETE FROM purchases
    WHERE purchases_id = $1
    RETURNING *;
    `;

export const delete_querys = {
    delete_purchase
};