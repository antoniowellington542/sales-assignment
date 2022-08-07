import { AuthGoogleProvider } from '../contexts/authGoogle';
import '../../styles/globals.css';
import '../../styles/loading.css';
import { BonusOfMonthProvider } from '../contexts/bonus';

function MyApp({ Component, pageProps }) {
  
  return (
    
    <AuthGoogleProvider>
        <BonusOfMonthProvider>
          <Component {...pageProps} />
        </BonusOfMonthProvider>
    </AuthGoogleProvider>
  )
}

export default MyApp
