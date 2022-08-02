import Link from 'next/link';
import { FcMoneyTransfer } from 'react-icons/fc';
const NavMenu = () =>{
    return(
        <div>
            <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
                <div className="flex align-middle">
                    <FcMoneyTransfer size={35}/>
                    <span className="text-2xl font-[Poppins] pl-2">
                        Sales
                    </span>
                </div>
                <ul className="md:flex md:items-center">
                    <li className="mx-4">
                        <Link href="/dashboard">
                            <span className="text-xl hover:text-green-400 duration-500 cursor-pointer">HOME</span>
                        </Link>
                    </li>
                    <li className="mx-4">
                        <Link href="/sales">
                            <span className="text-xl hover:text-green-400 duration-500 cursor-pointer">SALES</span>
                        </Link>
                    </li>
                    <li className="mx-4">
                        <Link href="/comission" className="text-xl hover:text-cyan-500 duration-500 cursor-pointer">COMISSION</Link>
                    </li>
                    <li className="mx-4">
                        <Link href="/edit-sale" className="text-xl hover:text-cyan-500 duration-500 cursor-pointer">EDIT SALE</Link>
                    </li>
                    <li className="mx-4">
                        <Link href="/profile" className="text-xl hover:text-cyan-500 duration-500  cursor-pointer">PROFILE</Link>
                    </li>
                    
                   
                </ul>
            </nav>
        </div>
    )
}

export{ NavMenu };