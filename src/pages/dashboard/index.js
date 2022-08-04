import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Loading from "../../components/Loading";
import { NavMenu } from "../../components/NavMenu";
import { AuthGoogleContext } from "../../contexts/authGoogle";

const Dashboard = ()=>{
    const {logout, signed} = useContext(AuthGoogleContext);
    const router = useRouter();

    if(typeof window !== "undefined"){
        if(!signed){
            router.replace("/login");
        }
    }
    const loading = true;
    return(
        <>
             {!loading ? ( 
                <div>
                    <NavMenu/>
                    <h1>Dashboard</h1>
                    <button onClick={logout}>logout</button>
                </div>
                ) : <Loading />}
        </>
            
    )
    
}

export default Dashboard;