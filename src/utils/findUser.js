import { findUserFirebaseMutation } from "../mutations/findUserFirebaseMutation";
import { findUserMutation } from "../mutations/findUserMutation";
import { client } from "./client";

export async function findUser(email){
    const user = await client.fetch(findUserMutation(email))
                                 .then(console.log("user"))
                                 .catch(console.error)

    if(user.length != 0){
        return user;
    }

    const user2 = await client.fetch(findUserFirebaseMutation(email))
                              .then(console.log("user firebase"))
                              .catch(console.error)

    return user2;

}
