import Link from "next/link";
import { useContext, useEffect, useState, Suspense, lazy } from "react";
import Card from "../../components/Card";
import {AiOutlineSearch} from 'react-icons/ai';
import { AuthGoogleContext } from "../../contexts/authGoogle";
import { useRouter } from "next/router";
import { listSales } from "../../utils/listSales";
import { redirectLoginPage } from "../../utils/redirectLoginPage";
import { listAllSales } from "../../utils/listAllSales";

const  NavMenu = lazy(() => import("../../components/NavMenu"));
const Loading = lazy(() => import("../../components/Loading"));

const Sale = () => {

    const [sales, setSales] = useState([]);
    const { signed } = useContext(AuthGoogleContext);
    const role = localStorage.getItem("@AuthFirebase:role");
    const router = useRouter();
    

    if(role != "noRole"){
        useEffect(()=>{
            
            redirectLoginPage(window, signed, router);
    
            if(role == "admin"){
                const req = async () =>{
                    setSales(await listAllSales());
                }
                req();
            }else{
                const req = async () =>{
                    setSales(await listSales());
                }
                req();
            }  
            console.log(sales);
        },[]);
    }
    
    
    if(signed){
        return  (
            <>
                <Suspense fallback={<Loading/>}>
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
                                <button className={`font-bold ${role == "noRole" || role == "admin" ? "bg-gray-400 cursor-not-allowed" : "bg-green-400 cursor-pointer"} p-2 rounded border border-gray-400 ml-auto mr-auto md:ml-0 md:mr-0 mt-8 md:mt-0`} disabled={role == "noRole" || role == "admin" ? true : false}>Create</button>
                            </Link>
                        </div>
                        {role == "noRole" ? <p className="text-white font-bold text-2xl text-center pt-4">To create or view sales edit your role in profile option</p>:
                            <div className="w-3/4 pt-12 h-[5em] grid md:grid-cols-5 gap-8 md:gap-8 justify-center items-center">
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
                        }
                    </div>
                </Suspense>
            </>
            
        )
    }
}

export default Sale;