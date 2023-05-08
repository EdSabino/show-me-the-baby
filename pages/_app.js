import RouteGuard from '../components/routeGuard';
import '../global.scss';
export { reportWebVitals } from 'next-axiom';

function MyApp({ Component, pageProps }) {
  process.env.AXIOM_TOKEN = process.env.NEXT_PUBLIC_AXIOM_TOKEN
  process.env.AXIOM_DATASET = process.env.NEXT_PUBLIC_AXIOM_DATASET
  return <RouteGuard>
    <Component {...pageProps} />
  </RouteGuard>
}

export default MyApp
