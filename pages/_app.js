import RouteGuard from '../components/routeGuard';
import '../global.scss';
export { reportWebVitals } from 'next-axiom';

function MyApp({ Component, pageProps }) {
  return <RouteGuard>
    <Component {...pageProps} />
  </RouteGuard>
}

export default MyApp
