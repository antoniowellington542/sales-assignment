export const findSaleMutation = (id) =>{
    const query = `*[_type == "sale" && _id == "${id}"]{
        _id,
        client_name,
        product,
        value,
        status,
        date,
        "sellerId": seller._ref,
    }`;
    
    return query;
}