export const listAllSalesMutation = () => { 
    const query = `*[_type == "sale"]{
        _id,
        client_name,
        product,
        comission,
        date
    }`;

    return query;
}