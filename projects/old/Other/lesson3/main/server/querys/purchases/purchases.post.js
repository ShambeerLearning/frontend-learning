const purchases_post_all =
    `
    INSERT INTO purchases
    (purchases_client, purchases_negr, purchases_price)
    VALUES
    ($1, $2, $3)
    RETURNING *;
    `;

export const purchases_post_querys = {
    purchases_post_all
};