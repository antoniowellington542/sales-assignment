export const listSalesMutation = (_id) => { 
    const query = `*[_type == "sale" && seller._ref == "${_id}"]{
        _id,
        client_name,
        product,
    }`;

    return query;
}