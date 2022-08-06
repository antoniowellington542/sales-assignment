export const findSaleMutation = (id) =>{
    const query = `*[_id == "${id}"]{
        _id,
        client_name,
        product,
        value,
        status,
        "sellerId": seller._ref,
    }`;
    
    return query;
}