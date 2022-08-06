import { findUserMutation } from "../mutations/findUserMutation";
import { client } from "./client";

export async function findUser(email){
    const user = await client.fetch(findUserMutation(email))
                                 .then(console.log("user"))
                                 .catch(console.error)
    return user;
}
