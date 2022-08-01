import { client } from "./client";
const query = `*[_type == "sale"]{
    _id,
    client_name
}`;

export const fetchData = async () =>{
    try{
        const sale = await client.fetch(query);
        return sale;

    } catch(err){
        console.log(err);
    }
};