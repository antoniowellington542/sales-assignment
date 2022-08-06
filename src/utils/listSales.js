import { listSalesMutation } from "../mutations/listSalesMutation";
import { jsonEval } from "@firebase/util";
import { client } from "./client";
import { findUser } from "./findUser";

export async function listSales(){
    const localUser = jsonEval(localStorage.getItem("@AuthFirebase:user"));
    const email = localUser.email;
    const user = await findUser(email);
    const _id = user[0]._id;
    const sales = await client.fetch(listSalesMutation(_id))
                            .then(console.log("sucess"))
                            .catch(console.error)
    return sales;
};