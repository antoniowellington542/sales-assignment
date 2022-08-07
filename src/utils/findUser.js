import { findUserMutation } from "../mutations/findUserMutation";
import { client } from "./client";

export async function findUser(email){
    const user = await client.fetch(findUserMutation(email))
                                 .then((result) => {return result})
                                 .catch(console.error)
    return user;
}
