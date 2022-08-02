import { useContext } from "react";
import { NavMenu } from "../../components/NavMenu";
import { AuthGoogleContext } from "../../contexts/authGoogle";

const Dashboard = ()=>{
    const {logout} = useContext(AuthGoogleContext);

    return(
        <>
            <NavMenu/>
            <h1>Dashboard</h1>
            <button onClick={logout}>logout</button>
        </>
        
    )
}

export default Dashboard;