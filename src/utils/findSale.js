import { findSaleMutation } from "../mutations/findSaleMutation";
import { client } from "./client";

export const findSale = async (id) =>{

    const sale = client.fetch(findSaleMutation(id))
                       .then(console.log("find sale sucess!"))
                       .catch(console.error)
    return sale;
};