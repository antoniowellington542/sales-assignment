import { client } from "./client";

const query = (id) => {
    const r = `*[_type=="user" && _id=="${id}"]{
        _id,
        name,           
    }`
    return r;
}

export const fetchDataUser = async (id) =>{
    try{
        const user = await client.fetch(query(id));
        return user;

    } catch(err){
        console.log(err);
    }
};