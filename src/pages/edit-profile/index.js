import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form"
import Router from 'next/router';
import { useEffect } from "react";
import { findUser } from "../../utils/findUser";
import NavMenu from "../../components/NavMenu";
import { jsonEval } from "@firebase/util";
import { updateUser } from "../../utils/updateUser";

const EditProfile = () => {

    const { register, handleSubmit, formState: { errors }, getValues} = useForm();
    const [showModal, setShowModal] = useState(false);
    const [sucess, setSucess] = useState(false);
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        const req = async() => {
            const localUser = jsonEval(localStorage.getItem("@AuthFirebase:user"));
            const email = localUser.email;
            setUsers(await findUser(email));
        }
        req();
    },[]);

    const onSubmit = async (data) => {
        
        const dataUser = [];
        const name = !data.name ? users[0].name : data.name;
        const role = !data.role ? users[0].role : data.role;
        
        Object.assign(dataUser, {
            name,
            role,
            _id: users[0]._id
        })

        const result = await updateUser(dataUser);
        result ? setSucess(true) : setSucess(false);
        setShowModal(true);

    };

    return(
        <>
        <NavMenu />
        {showModal ? (
            <>
                <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                        Edit User
                    </h3>
                    </div>
                    <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        {sucess ? "Congratulations! Your profile is Edited!" : "Error!"}
                    </p>
                    </div>
                    <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                    {sucess ? 
                        (
                            <Link href="/profile" >
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {setShowModal(false)}}
                                >
                                    Ir para users
                                </button>
                            </Link>
                        ) : 
                        (
                            <button
                                className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => {setShowModal(false);Router.reload(window.location.pathname)}}
                            >
                                Fechar
                            </button>
                        )}
                    </div>
                </div>
                </div>
                </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
            {users.map((user)=>
                <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="w-full relative py-3 sm:max-w-xl sm:mx-auto">
                            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                            <div className="max-w-md mx-auto">
                                <div className="flex justify-center items-center space-x-5">
                                    <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                        <h2 className="leading-relaxed">Edit a User</h2>
                                    </div>
                                    </div>
                                    <div className="divide-y divide-gray-200">
                                        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                            <div className="flex flex-col">
                                                <label className="leading-loose">Name</label>
                                                <input {...register("name")} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder={user.name}/>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="leading-loose">Role</label>
                                                <input {...register("role")} type="text"  className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder={user.role}/>
                                            </div>
                                        </div>
                                        <div className="pt-4 flex items-center space-x-4">
                                            <Link href="/profile">
                                                <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none">
                                                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
                                                </button>
                                            </Link>
                                            <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Confirm</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )}
        </>
    )
}

export default EditProfile;