import { Login } from "./login";
import { useContext } from "react";
import { AuthGoogleContext } from "../contexts/authGoogle";
import { NavMenu } from "../components/NavMenu";
import { Dashboard } from "./dashboard";
export default function Home() {
  const {signed} = useContext(AuthGoogleContext);
    
  if(!signed){
    return (
        <Login/>
      )
  }else{
    return(
    <Dashboard/>
    )
  }
}
