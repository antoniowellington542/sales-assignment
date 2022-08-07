import { client } from "./client";
import Router from 'next/router';
import { comission } from "./comission";
// import { CalcComission } from "./calcComission";

export async function approvedSale(sale, bonusAchieved, setBonusAchieved){
    
    const {firstSale, actualSale} = await comission(sale, bonusAchieved, setBonusAchieved);
    // console.log(lists);
    
        await client.patch(firstSale._id)
            .set({
                comission: firstSale.comission
            })
            .commit()
            .then(console.log("Comission"))
            .catch((err)=>{
                console.error("Update failed: ", err.message)
            })

    await client.patch(actualSale._id)
                .set({
                    status: true,
                    comission: actualSale.comission
                })
                .commit()
                .then(()=>Router.reload("/sales"))
                .catch((err)=>{
                    console.error("Update failed: ", err.message)
                })
};