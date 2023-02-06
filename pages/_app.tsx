import '../style/index.css' 
import { TranslationProvider } from '../translation-hooks'

export default function MyApp({ Component, pageProps }) {
  return <TranslationProvider><Component {...pageProps} /></TranslationProvider> 
}
 