import { client } from "./client";
import Router from 'next/router';

export function approvedSale(_id, date){
    

    console.log(date);

    const comission = () => {
        if(value <= 400){
            return value*(0.1);
        }else if(value > 400 && value <= 800){
            return value*(0.2);
        }
    }

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