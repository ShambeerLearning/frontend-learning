export const getPurchases =
    `
    SELECT
    p.purchases_id AS "ID",
    c.clients_name AS "Имя клиента",
    pr.products_name AS "Название продукта"
    FROM
    purchases p
    JOIN
    clients c ON p.purchases_clients = c.clients_id
    JOIN
    products pr ON p.purchases_product = pr.products_id;
    `;