import { createUserByFireBaseMutation } from "../mutations/createUserByFireBaseMutation";
import { client } from "./client";
import { findUser } from "./findUser";
import { registerInGoogle } from "./registerGoogle";

export const createUserFirebase =  async () => {
    const data = await registerInGoogle();
    console.log(data);
    const userExists =  await findUser(data.email);

    const result = 
    (   userExists.length == 0 ? 
            await client
                .create(createUserByFireBaseMutation(data))
                .then(()=>{return true})
                .catch(console.error) 
        : false
    );

    return result;
}
  