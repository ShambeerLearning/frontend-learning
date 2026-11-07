const client_post_all =
    `
    INSERT INTO client
    (client_name, client_number, client_email)
    VALUES
    ($1, $2, $3)
    RETURNING *;
    `;

export const client_post_querys = {
    client_post_all
};