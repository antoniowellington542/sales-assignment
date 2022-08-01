import { useEffect, useState } from "react";
import client from "../../utils/client";

const Sale = () => {

    const [sale, setSale] = useState(null);

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const sales = await client.fetch(`*[_type == "sale"]`);
                console.log(sales);
                setSale({sales});
            } catch(err){
                console.log(err);
            }
        };
        fetchData();
    },[]);

    return (
        <div>
            <ul>
            {sale.map((item) => {
                    <li>{item[0]._id}</li>
                })}
            </ul>
        </div>
    )
}

export { Sale };