import { useRouter }  from  'next/router';
import { useState, useEffect } from 'react';
import { NavMenu } from '../../components/NavMenu';
import { fetchSaleDetails } from '../../utils/saleDetails';


const SaleDetails = () => {

    const [sale, setSale] = useState([]);
    const router = useRouter();
    const {id} = router.query;

    useEffect(()=>{
        req();
    },[]);

    const req = async () => {
        const result = await fetchSaleDetails(id);
        setSale(result);
    }

    //console.log(sale);

    return(
        <>
            <NavMenu/>
            <div className='w-full min-h-screen bg-blue-500'>
                <div className='w-3/4 bg-white'>

                </div>
            </div>
        </>
    )
}

export default SaleDetails;