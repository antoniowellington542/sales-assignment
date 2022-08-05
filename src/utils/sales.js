import { client } from "./client";

const query = (id) => { 
    const r = `*[_type == "sale" && seller._ref == "${id}"]{
        _id,
        client_name,
        product,
        value
    }`;
    return r;
}

export const fetchDataSales = async (id) =>{
    try{
        const sale = await client.fetch(query(id));
        return sale;

    } catch(err){
        console.log(err);
    }
};