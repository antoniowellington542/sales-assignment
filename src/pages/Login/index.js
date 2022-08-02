import { FcMoneyTransfer, FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";
import Link from "next/link";
const Login = () =>{

    const { signInGoogle } = useContext(AuthGoogleContext);
    return(
        <div className="w-full h-[100vh] flex justify-center items-center p-5" style={{background: 'linear-gradient(to right, #7FFFD4 40%, white 40%)'}}>
            <div className="w-3/4 flex shadow-2xl shadow-black rounded p-2 h-[80%]">
                <div className="w-[35%] flex flex-col items-center justify-center">
                    <FcMoneyTransfer size={250}/>
                    <h2 className="text-xl  pl-2"><strong>SaleStore</strong></h2>
                </div>
                <div className="w-[65%] h-full flex flex-col items-center p-5">
                    <h2 className="mt-24 text-gray-600"><strong>Sign in</strong></h2>
                    <div className="flex flex-col mt-24 mb-1 ">
                        <span><strong>Email</strong></span>
                        <input className="w-96 rounded border border-gray-500 p-2 my-1" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-gray-600"><strong>Password</strong></span>
                        <input className="w-96 rounded border border-gray-500 p-2 my-1" />
                        <div className="ml-auto cursor-pointer">
                            <Link href="/reset-password">
                                <span className="text-gray-600 font-medium">forgot password?</span>
                            </Link>
                        </div>
                    </div>
                    <div className="w-96 md:flex justify-between mt-4">
                        <button className="w-44 bg-green-400 border border-gray-400 rounded p-3 cursor-pointer"><strong>Login</strong></button>
                        <button className="w-44 border border-gray-400 rounded p-3 flex justify-center cursor-pointer" onClick={signInGoogle}><FcGoogle size={25}/></button>
                    </div>
                    <Link href="/create-user">
                        <span className="text-gray-600 font-bold mt-24">Create a acount ?</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export { Login };