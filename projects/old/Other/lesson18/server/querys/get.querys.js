const get_purchases =
    `
    SELECT
    p.purchases_id, c.clients_name, pr.products_name
    FROM
    purchases p
    JOIN
    clients c ON p.purchases_clients = c.clients_id
    JOIN
    products pr ON p.purchases_products = pr.products_id;
    `;

const get_clients =
    `
    SELECT
    c.clients_id, c.clients_name
    FROM
    clients c;
    `;

const get_products =
    `
    SELECT
    pr.products_id, pr.products_name
    FROM
    products pr;
    `;

const get_purchases_id =
    `
    SELECT
    p.purchases_id
    FROM
    purchases p;
    `;


export const get_querys = {
    get_purchases,
    get_purchases_id,
    get_clients,
    get_products
}