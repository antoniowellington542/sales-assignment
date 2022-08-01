import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { useContext } from "react";
import { AuthGoogleContext } from "../src/contexts/authGoogle";
import { Sale } from "./sale";
export default function Home() {
  const {signed} = useContext(AuthGoogleContext);
    
  return <Sale/>
  // if(!signed){
  //   return (
  //       <Login/>
  //     )
  // }else{
  //   return(
  //     <Dashboard/>
  //   )
  // }
}
