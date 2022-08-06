import { useEffect, useState } from "react";
import NavMenu from "../../components/NavMenu";
import { findUser } from "../../utils/findUser";
import { jsonEval } from "@firebase/util";
import Link from "next/link";

const Profile = () => {

    const [users, setUsers] = useState([]);
       
    useEffect(()=>{
        const req = async() => {
            const localUser = jsonEval(localStorage.getItem("@AuthFirebase:user"));
            const email = localUser.email;
            setUsers(await findUser(email));
        }
        req();
    }, [])

    return(
        <>
            <NavMenu />
            {users.map((user)=>
                <div class="p-16">
                    <div class="p-4 md:p-8 bg-white shadow mt-24">
                        <div class="grid grid-cols-1 md:grid-cols-3">
                            <div class="grid grid-cols-1 md:grid-cols-2 text-center order-last md:order-first mt-20 md:mt-0">
                                <div>
                                    <p class="font-bold text-gray-700 text-xl">Role</p>
                                    <p class="text-gray-400">{localStorage.getItem("@AuthFirebase:role")}</p>
                                </div>
                                <div>
                                    <p class="font-bold text-gray-700 text-xl">Email</p>
                                    <p class="text-gray-400 text-sm">{user.email}</p>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <div class="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                                <Link href={"/edit-profile"}>
                                    <button
                                    class="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                                    >
                                    Edit
                                    </button>
                                </Link>
                                    <button
                                class="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                                >
                                Delete
                                </button>
                            </div>
                        </div>
                        <div class="mt-20 text-center border-b pb-12">
                            <h1 class="text-4xl font-medium text-gray-700">{user.name}</h1>
                        </div>
                        <div class="mt-12 flex flex-col justify-center">
                            <p class="text-gray-600 text-center font-light lg:px-16">A rising developer</p>
                        </div>    
                    </div>
                </div>
            )}
        </>
    )
}

export default Profile;