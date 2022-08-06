import { client } from "./client";
import { listAllSalesMutation } from "../mutations/listAllSalesMutation";

export async function listAllSales(){
    const sales = await client.fetch(listAllSalesMutation())
                            .then(console.log("sucess"))
                            .catch(console.error)
    return sales;
};