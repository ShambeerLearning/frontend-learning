const negr_select_all =
    `
    SELECT * FROM negrs;
    `;

const negr_select_id_and_name =
    `
    SELECT negrs_id, negrs_name FROM negrs;
    `;

    
export const negr_get_querys = {
    negr_select_all,
    negr_select_id_and_name
};