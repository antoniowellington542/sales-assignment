import { client } from "./client";

export async function updateUser(data){

    const { _id, name, role } = data;
    
    const result = await client.patch(_id)
                            .set({
                                name,
                                role,
                            })
                            .commit()
                            .then(()=>{
                                localStorage.setItem("@AuthFirebase:role", role);
                                return true;
                            })
                            .catch((err)=>{
                                console.error("Update failed: ", err.message)
                            })
    return result;
};