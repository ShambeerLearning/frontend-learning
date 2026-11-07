const negr_post_all =
    `
    INSERT INTO negrs
    (negrs_name, negrs_post, negrs_history, negrs_age)
    VALUES
    ($1, $2, $3, $4)
    RETURNING *
    `;

export const negr_post_querys = {
    negr_post_all
};