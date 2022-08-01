import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { useContext } from "react";
import { AuthGoogleContext } from "../src/contexts/authGoogle";
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
