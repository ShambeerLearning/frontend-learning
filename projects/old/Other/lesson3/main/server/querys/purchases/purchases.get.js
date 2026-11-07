const purchases_get_all_and_id_table =
    `
    SELECT
    p.purchases_id AS "Номер покупки",
    c.client_name AS "Имя клиента",
    n.negrs_name AS "Имя негра",
    p.purchases_price AS "Цена негра"
        FROM purchases p
        JOIN client c ON p.purchases_client = c.client_id
        JOIN negrs n ON p.purchases_negr = n.negrs_id;
    `;

export const purchases_get_querys = {
    purchases_get_all_and_id_table
};