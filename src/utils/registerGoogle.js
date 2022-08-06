import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { app } from '../services/fireBaseConfig';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const registerInGoogle = () => {

    const dataUser = signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            return user;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });

    return dataUser;
}