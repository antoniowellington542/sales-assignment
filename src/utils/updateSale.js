import { client } from "./client";

export async function updateSale(data){
    
    const {_id, value, client_name, product} = data;

    const result = await client.patch(_id)
                            .set({
                                client_name,
                                product,
                                value,
                            })
                            .commit()
                            .then(console.log("sucess"))
                            .catch((err)=>{
                                console.error("Update failed: ", err.message)
                            })
    return result;
};