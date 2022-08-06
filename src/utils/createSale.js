import { createSaleMutation } from "../mutations/createSaleMutation";
import { client } from "./client";


export async function createSale(data){
    const {client_name, product, value, _id} = data;

    const result = await client.create(createSaleMutation(client_name, product, value, _id))
                .then(console.log("created!"))
                .catch(console.error)

    return result;
}

  