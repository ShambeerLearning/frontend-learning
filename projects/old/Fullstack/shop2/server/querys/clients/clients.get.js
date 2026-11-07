const client_get_all =
    `
    SELECT * FROM client;
    `;

const client_get_id_and_name =
    `
    SELECT client_id, client_name FROM client;
    `;

    
export const client_get_querys = {
    client_get_all,
    client_get_id_and_name
}