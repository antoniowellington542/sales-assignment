import { createSaleMutation } from "../mutations/createSaleMutation";
import { client } from "./client";


export async function createSale(data){
    const result = await client.create(createSaleMutation(data))
                .then(console.log("created!"))
                .catch(console.error)

    return result;
}

  