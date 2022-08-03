import { AuthGoogleProvider } from '../contexts/authGoogle';
import '../../styles/globals.css'
import { IconContext } from 'react-icons';

function MyApp({ Component, pageProps }) {
  
  return (
    
    <AuthGoogleProvider>
        <Component {...pageProps} />
    </AuthGoogleProvider>
  )
}

export default MyApp
