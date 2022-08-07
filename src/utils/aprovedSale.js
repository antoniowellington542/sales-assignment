import { client } from "./client";
import Router from 'next/router';
import { comission } from "./comission";
// import { CalcComission } from "./calcComission";

export async function approvedSale(sale){
    
    const {value, _id} = sale;

    await comission(value);
    // await client.patch(_id)
    //             .set({
    //                 status: true
    //             })
    //             .commit()
    //             .then(()=>{Router.replace("/sales")})
    //             .catch((err)=>{
    //                 console.error("Update failed: ", err.message)
    //             })
};