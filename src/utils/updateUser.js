import { client } from "./client";

export async function updateUser(data){

    const { _id, name, role } = data;
    
    const result = await client.patch(_id)
                            .set({
                                name,
                                role,
                            })
                            .commit()
                            .then(console.log("sucess"))
                            .catch((err)=>{
                                console.error("Update failed: ", err.message)
                            })
    return result;
};