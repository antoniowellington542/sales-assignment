import { useEffect, useState } from "react";
import { fetchData } from "../../utils/sales";

const Sale = () => {

    const [sales, setSales] = useState([]);
    
    useEffect(()=>{
        req();
    },[]);

    const req = async () => {
        setSales(await fetchData());
    }

    return (
        <div>
            {sales.map((sale)=>  <h1 key={sale._id} style={{ color: "black"}}>{sale.client_name}</h1>)}
        </div>
    )
}

export { Sale };