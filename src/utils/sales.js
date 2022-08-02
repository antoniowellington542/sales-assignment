import { client } from "./client";

const query = `*[_type == "sale"]{
    _id,
    client_name,
    product,
    value
}`;

export const fetchData = async () =>{
    try{
        const sale = await client.fetch(query);
        return sale;

    } catch(err){
        console.log(err);
    }
};