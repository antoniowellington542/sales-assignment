import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { useContext } from "react";
import { AuthGoogleContext } from "../contexts/authGoogle";
import { Sale } from "./sale";
import { NavMenu } from "../components/NavMenu";
export default function Home() {
  const {signed} = useContext(AuthGoogleContext);
    
  if(!signed){
    return (
        <Login/>
      )
  }else{
    return(
    <>
      <NavMenu/>
      <Sale/>
    </>
    )
  }
}
