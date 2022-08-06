import { jsonEval } from "@firebase/util";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form"
import { AiOutlineWarning } from "react-icons/ai";
import { createSale } from "../../utils/createSale";
import { findUser } from "../../utils/findUser";
import Router from 'next/router';

const CreateSale = () => {

    const { register, handleSubmit, formState: { errors }, getValues} = useForm();
    const [showModal, setShowModal] = useState(false);
    const [sucess, setSucess] = useState(false);

    const onSubmit = async (data) => {
        const localUser = jsonEval(localStorage.getItem("@AuthFirebase:user"));
        const email = localUser.email
        const user = await findUser(email);
        const dataSale = [];

        Object.assign(dataSale, {
            client_name: data.clientName,
            product: data.product,
            value: parseInt(data.value),
            _id: user[0]._id
        })

        const result = createSale(dataSale);
        result ? setSucess(true) : setSucess(false);
        setShowModal(true);

    };

    return(
        <>
        {showModal ? (
            <>
                <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-center justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                        Create Sale
                    </h3>
                    </div>
                    <div className="relative p-6 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        {sucess ? "Congratulations! Your sale is created!": "Error!"}
                    </p>
                    </div>
                    <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                    {sucess ? 
                        (
                            <Link href="/sales" >
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => {setShowModal(false)}}
                                >
                                    Ir para Sales
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
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full relative py-3 sm:max-w-xl sm:mx-auto">
                        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                        <div className="max-w-md mx-auto">
                            <div className="flex justify-center items-center space-x-5">
                                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                    <h2 className="leading-relaxed">Create a Sale</h2>
                                </div>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Client Name</label>
                                            <input {...register("clientName", { required: true})} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Name"/>
                                        </div>
                                        {errors.clientName && (<div className="flex pt-2"><AiOutlineWarning size={24} color="red"/><p className="pl-2">This field is required</p></div>)}
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Product</label>
                                            <input {...register("product", { required: true})} type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Product"/>
                                        </div>
                                        {errors.product && (<div className="flex pt-2"><AiOutlineWarning size={24} color="red"/><p className="pl-2">This field is required</p></div>)}
                                        <div className="flex flex-col">
                                            <label className="leading-loose">Value</label>
                                            <input {...register("value", { required: true})} type="number" min="0" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Value"/>
                                        </div>
                                        {errors.value && (<div className="flex pt-2"><AiOutlineWarning size={24} color="red"/><p className="pl-2">This field is required</p></div>)}
                                    </div>
                                    <div className="pt-4 flex items-center space-x-4">
                                        <button className="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none" onClick={()=>Router.replace('/sales')}>
                                            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> Cancel
                                        </button>
                                        <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateSale;