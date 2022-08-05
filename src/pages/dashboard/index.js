import { useRouter } from "next/router";
import { useContext, lazy, Suspense } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";

const  NavMenu = lazy(() => import("../../components/NavMenu"));
const Loading = lazy(() => import("../../components/Loading"));

const Dashboard = ()=>{
    const {signed} = useContext(AuthGoogleContext);
    const router = useRouter();

    if(typeof window !== "undefined"){
        if(!signed){
            router.replace("/");
        }
    }
    
    if(signed){
        return(
            <>
                <Suspense fallback={<Loading/>}>
                    <NavMenu/>
                    <h1>Dashboard</h1>
                </Suspense>
            </>
                
        )
    }
    
}

export default Dashboard;