export const updateSaleMutation = (data) =>{
    
    const query = `*[_type == "sale" && _id == "${data._id}"]{
        _id,
        client_name: ${data.client_name},
        product: ${data.product},
        value: ${data.value},
    }`;
    
    return query;
}