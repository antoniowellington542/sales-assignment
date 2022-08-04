import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { NavMenu } from "../../components/NavMenu";
import { AuthGoogleContext } from "../../contexts/authGoogle";

const Dashboard = ()=>{
    const {logout, signed} = useContext(AuthGoogleContext);
    const route = useRouter();
    useEffect(()=>{
        if(!signed){
            route.push('/login');
        }
    },[])

    if(signed){
        return(
            <>
                <NavMenu/>
                <h1>Dashboard</h1>
                <button onClick={logout}>logout</button>
            </>
            
        )
    }
}

export default Dashboard;