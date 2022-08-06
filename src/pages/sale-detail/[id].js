import { useState, useEffect, Suspense, lazy, useContext} from 'react';
import { useRouter } from 'next/router';
import { RiMoneyDollarBoxFill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { MdOutlineCancelPresentation } from 'react-icons/md';
import { BsBox } from 'react-icons/bs';
import { ImUserTie } from 'react-icons/im';
import { redirectLoginPage } from '../../utils/redirectLoginPage';
import { AuthGoogleContext } from '../../contexts/authGoogle';
import { findSale } from '../../utils/findSale';
import { findUser } from '../../utils/findUser';
import { deleteSale } from '../../utils/deleteSale';
import { jsonEval } from '@firebase/util';

const NavMenu = lazy(() => import("../../components/NavMenu"));
const Loading = lazy(() => import("../../components/Loading"));

const SaleDetails = () => {

    const [users, setUsers] = useState([]);
    const [sales, setSales] = useState([]);
    
    const router = useRouter();
    const { id } = router.query;
    
    const {signed} = useContext(AuthGoogleContext);

    useEffect(()=>{
        redirectLoginPage(window, signed, router);
        const req = async () =>{
            setSales(await findSale(id));
        }
        req();
        reqUser();
    },[]);

    // const reqSale = async (id) => {
    //     setSales(await findSale(id));
    // }

    const reqUser = async() => {
        const localUser = jsonEval(localStorage.getItem("@AuthFirebase:user"));
        const email = localUser.email
        setUsers(await findUser(email));
    }

    if(signed){
        return(
            <>
                <Suspense fallback={<Loading/>}>
                    <NavMenu/>
                    {sales.map((sale) => 
                        <div key={sale._id} className='w-full h-[92.3vh] bg-blue-500 p-5 flex justify-center items-center'>
                            <div className='flex flex-col md:flex-row w-[90%] md:w-2/4 h-[40em] border border-gray-500 bg-white shadow-2xl shadow-black rounded-xl'>
                                <div className='p-4 md:p-0 md:w-2/5  flex flex-col justify-center items-center bg-green-400 rounded-t-xl md:rounded-l-xl'>
                                    <FaUser size={48}/>
                                    <h2 className='pt-4 text-xl font-medium'>{sale.client_name}</h2>
                                </div>
                                <div className='w-4/5 md:w-3/5 h-96 flex flex-col mt-auto mb-auto ml-auto mr-auto md:ml-0 md:mr-0'>
                                    <div className='w-full h-full grid grid-cols-2 gap-4'>
                                        <div className='flex flex-col justify-center items-center'>
                                            <ImUserTie size={40}/>
                                            {users.map((user)=> user.name ? <p className='text-2xl font-light pt-2'>{user.name}</p>: <p className='text-2xl font-light pl-4 pt-2'>Not seller</p>)}
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <RiMoneyDollarBoxFill size={40}/>
                                            <p className='text-2xl font-light pt-2'>{sale.value} R$</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            <BsBox size={40}/>
                                            <p className='text-2xl font-light pt-2'>{sale.product}</p>
                                        </div>
                                        <div className='flex flex-col justify-center items-center'>
                                            {sale.status ? <AiOutlineCheckCircle size={40} color={'green'}/> : <MdOutlineCancelPresentation size={40} color={'red'}/>}
                                            <p className='text-2xl font-light pt-2'>{sale.status}</p>
                                        </div>  
                                    </div>
                                    <div className='flex justify-around'>
                                        <button className='w-[5em] md:w-[10em] p-3 bg-yellow-500 rounded-xl text-xl font-bold'>Edit</button>
                                        <button className='w-[5em] md:w-[10em] p-3 bg-yellow-500 rounded-xl text-xl font-bold' onClick={() => deleteSale(sale._id)}>Delete</button>  
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Suspense>
            </>
        )
    }
}

export default SaleDetails;