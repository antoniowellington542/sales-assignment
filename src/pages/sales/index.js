import Link from "next/link";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { NavMenu } from "../../components/NavMenu";
import { fetchData } from "../../utils/sales";
import {AiOutlineSearch} from 'react-icons/ai';

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
            <div className="w-full p-5 relative">
                <div className="w-full flex justify-between">
                    <label className="flex border border-gray-500 rounded-xl bg-green-400">
                        <input id="search" name="search" className="pl-2 rounded-l-xl" type="text" placeholder="Search" />
                        <button>
                            <AiOutlineSearch className="h-full p-1 border-l border-gray-500 " size={36}/>
                        </button>
                    </label>
                    <Link href="create-sale">
                        <span className="font-bold bg-green-400 p-2 rounded border border-gray-400 cursor-pointer">Create</span>
                    </Link>
                </div>
                <Card className="pt-5" />
            </div>
        </>
        
    )
}

export default Sale;