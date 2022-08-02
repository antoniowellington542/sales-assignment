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
            <div className="w-full p-[2em] bg-blue-400 min-h-screen flex flex-col items-center">
                <h1 className="text-5xl text-white pb-[1.5em]">Sales</h1>
                <div className="md:w-3/4 border-b border-white pb-[1em] flex flex-col md:flex-row md:justify-between">
                    <label className="h-8 flex border border-gray-500 rounded-xl bg-green-400">
                        <input id="search" name="search" className="pl-2 rounded-l-xl" type="text" placeholder="Search" />
                        <button>
                            <AiOutlineSearch className="h-full p-1 border-l border-gray-500 " size={36}/>
                        </button>
                    </label>
                    <Link href="create-sale">
                        <span className="font-bold bg-green-400 p-2 rounded border border-gray-400 cursor-pointer ml-auto mr-auto md:ml-0 md:mr-0 mt-8 md:mt-0">Create</span>
                    </Link>
                </div>
                <div className="w-3/4 pt-12 min-h-screen grid md:grid-cols-5 gap-8 md:gap-8 justify-center items-center">
                    {
                        sales.map((sale)=> 
                            <Card 
                                key={sale._id}
                                id={sale._id}
                                product={sale.product} 
                                client_name={sale.client_name}
                                value={sale.value}
                            />
                        )
                    }
                </div>
            </div>
        </>
        
    )
}

export default Sale;