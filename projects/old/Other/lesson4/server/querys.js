export const get_names =
    `
    SELECT
    s.surname_name_id AS "ID",
    n.name_name AS "Имя",
    su.surname_name AS "Фамилия"
    FROM 
    surname_name s
             JOIN 
    name n ON s.surname_name_name = n.name_id
             JOIN 
    surname su ON s.surname_name_surname = su.surname_id;
    `;