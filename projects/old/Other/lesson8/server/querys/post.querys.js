export const post_purchases =
    `
    INSERT INTO
    purchases (purchases_clients, purchases_product)
    VALUES
    ($1, $2)
    RETURNING *
    `;