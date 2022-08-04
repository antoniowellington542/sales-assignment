import { useRouter } from "next/router";
import { useContext, lazy, Suspense } from "react";
import { AuthGoogleContext } from "../../contexts/authGoogle";

const  NavMenu = lazy(() => import("../../components/NavMenu"));
const Loading = lazy(() => import("../../components/Loading"));

const Dashboard = ()=>{
    const {logout, signed} = useContext(AuthGoogleContext);
    const router = useRouter();

    if(typeof window !== "undefined"){
        if(!signed){
            router.replace("/");
        }
    }
    return(
        <>
            <Suspense fallback={<Loading/>}>
                <NavMenu/>
                <h1>Dashboard</h1>
                <button onClick={logout}>logout</button>
            </Suspense>
        </>
            
    )
    
}

export default Dashboard;