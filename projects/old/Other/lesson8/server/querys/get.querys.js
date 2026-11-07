const get_purchases =
    `
    SELECT
    p.purchases_id AS "Номер заказа",
    c.clients_name AS "Имя клиента",
    pr.products_name AS "Название продукта"
    FROM
    purchases p
    JOIN
    clients c ON p.purchases_clients = c.clients_id
    JOIN
    products pr ON p.purchases_product = pr.products_id;
    `;

const get_clients =
    `
    SELECT
    clients_id, clients_name
    FROM
    clients;
    `;

const get_products =
    `
    SELECT
    products_id, products_name
    FROM
    products
    `;

export const get_querys_purchases = {
    get_purchases,
    get_clients,
    get_products
}