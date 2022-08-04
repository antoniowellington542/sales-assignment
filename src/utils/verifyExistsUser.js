import { client } from "./client";

const query = (email) => {
    const r = `*[_type=="user" && email==${email}]{
        _id,
        name,           
    }`
    return r;
}

export const fetchDataExistUser = async (email) =>{
    try{
        const user = await client.fetch(query(email));
        if(user){
            return true;
        }

        return false;

    } catch(err){
        console.log(err);
    }
};