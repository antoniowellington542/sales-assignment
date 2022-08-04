import { client } from "./client";

const query = (id) => {
    const r = `*[_type=="sale" && _id=="${id}"]`;
    return r;
}

export const fetchDataSale = async (id) =>{
    try{
        await client.delete({query: `*[_type=="sale" && _id=="${id}"]`});
    } catch(err){
        console.log(err);
    }
};