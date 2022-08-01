import { useContext } from "react";
import { AuthGoogleContext } from "../../src/contexts/authGoogle";

const Dashboard = ()=>{
    const {logout} = useContext(AuthGoogleContext);

    return(
        <>
            <h1>Dashboard</h1>
            <button onClick={logout}>logout</button>
        </>
        
    )
}

export { Dashboard };