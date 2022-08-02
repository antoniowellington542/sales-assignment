import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { NavMenu } from "../../components/NavMenu";
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
        <>
            <NavMenu/>
            <div className="w-full p-5">
                <div>
                    <input type="text" />
                    <Link href="create-sale">
                        <span className="font-bold bg-green-400 p-2 rounded border border-gray-400 cursor-pointer">Create</span>
                    </Link>
                </div>
                
            <Card/>
            </div>
        </>
        
    )
}

export default Sale;