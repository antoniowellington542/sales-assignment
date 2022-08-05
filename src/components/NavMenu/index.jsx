import Link from 'next/link';
import { FcMoneyTransfer } from 'react-icons/fc';
import { VscMenu } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { useContext } from 'react';
import { AuthGoogleContext } from '../../contexts/authGoogle';
const NavMenu = () =>{
    const [open, setOpen] = useState(false);
    const {logout} = useContext(AuthGoogleContext);
    
    return(
        <div>
            <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
                <div className="flex align-middle">
                    <FcMoneyTransfer size={35}/>
                    <span className="text-2xl font-[Poppins] pl-2">
                        Sales
                    </span>
                    <span className='text-3xl cursor-pointer  md:hidden block ml-auto' onClick={()=>setOpen(!open)}>
                        {open == true ? <AiOutlineClose/> : <VscMenu /> }
                    </span>
                </div>
                    <ul className={`flex flex-col md:flex-row items-center justify-center z-[1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 pb-24 md:pl-0 pl-4 md:opacity-100 ${open == true ? 'top-[50px] h-full' : 'h-[0px] top-[-500px]'} transition-all ease-in duration-700`}>
                        <li className="mx-4 my-6 md:my-0 text-2xl md:text-xl hover:text-green-400 duration-500 cursor-pointer">
                            <Link href="/dashboard">HOME</Link>
                        </li>
                        <li className="mx-4 my-6 md:my-0 text-2xl md:text-xl hover:text-green-400 duration-500 cursor-pointer ">
                            <Link href="/sales">SALES</Link>
                        </li>
                        <li className="mx-4 my-6 md:my-0 text-2xl md:text-xl hover:text-green-400 duration-500 cursor-pointer">
                            <Link href="/comission">COMISSION</Link>
                        </li>
                        <li className="mx-4 my-6 md:my-0 bg-green-400 p-2 rounded text-2xl md:text-xl font- hover:text-white duration-500  cursor-pointer">
                            <Link href="/profile">PROFILE</Link>
                        </li>
                        <li className="mx-4 my-6 md:my-0 bg-red-400 p-2 rounded text-2xl md:text-xl font- hover:text-white duration-500  cursor-pointer">
                            <button onClick={logout}>LOGOUT</button>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}

export default NavMenu;