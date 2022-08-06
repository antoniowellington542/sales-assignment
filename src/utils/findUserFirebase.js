import { findUserFirebaseMutation } from "../mutations/findUserFirebaseMutation";
import { client } from "./client";

export async function findUserFirebase(email){
    const user = await client.fetch(findUserFirebaseMutation(email))
                                 .then(console.log("ok"))
                                 .catch(console.error)

    return user;
}
