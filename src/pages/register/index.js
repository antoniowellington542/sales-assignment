import { useEffect, useState } from "react";
import { createUser } from "../../mutations/createUser";

import { registerUser } from "../../utils/register";

const Register = () => {

    
    const name = "jose";
    const role = "buy";
    const req = async () => {
        return await registerUser(createUser(name, role));
    }

    return(
        <button onClick={()=>req()}>Register</button>
    )
}

export default Register;