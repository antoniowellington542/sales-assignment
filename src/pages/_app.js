import { AuthGoogleProvider } from '../contexts/authGoogle';
import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
  
  return (
    
    <AuthGoogleProvider>
        <Component {...pageProps} />
    </AuthGoogleProvider>
  )
}

export default MyApp
