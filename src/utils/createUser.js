import { createUser, createUserMutation } from "../mutations/createUserMutation";
import { client } from "./client";
import { findUser } from "./findUser";

export const createUser = async (data) => {
    const userExists = await client.fetch(findUser(data.email))
                             .then(console.log("ok"))
                             .catch(console.error)

    const result = 
    (   userExists.length == 0 ? 
            await client
                .create(createUserMutation(data))
                .then(()=>{return true})
                .catch(console.error) 
        : false
    );

    return result;
};  