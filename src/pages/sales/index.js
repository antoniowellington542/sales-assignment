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
            <div className="w-full p-5 relative pb-[2em] flex flex-col justify-center items-center">
                <div className="w-3/4 flex justify-between">
                    <Link href="create-sale">
                        <span className="font-bold bg-green-400 p-2 rounded border border-gray-400 cursor-pointer">Create</span>
                    </Link>
                    <label className="flex border border-gray-500 rounded-xl bg-green-400">
                        <input id="search" name="search" className="pl-2 rounded-l-xl" type="text" placeholder="Search" />
                        <button>
                            <AiOutlineSearch className="h-full p-1 border-l border-gray-500 " size={36}/>
                        </button>
                    </label>
                </div>
                <div className="w-3/4 pt-[5em] grid grid-cols-4 gap-3">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </>
        
    )
}

export default Sale;