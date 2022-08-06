import { createUserMutation } from '../mutations/createUserMutation';
import { client } from "./client";
import { findUser } from "./findUser";

export const createUser = async (data) => {
    
    const {authUserId, name, role, email, password} = data;
    
    const userExists = await findUser(email);

    const result = 
    (   userExists.length == 0 ? 
            await client
                .create(createUserMutation(authUserId, name, email, role, password))
                .then(()=>{return true})
                .catch(console.error) 
        : false
    );

    return result;
};  