import RouteGuard from '../components/routeGuard';
import '../global.scss';

function MyApp({ Component, pageProps }) {
  return <RouteGuard>
    <Component {...pageProps} />
  </RouteGuard>
}

export default MyApp