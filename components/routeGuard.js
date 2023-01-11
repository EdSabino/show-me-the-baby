import { useEffect } from 'react';
import { useRouter } from 'next/router';

const freeRoutes = ['/start', '/presentation'];
function RouteGuard({ children }) {
  const router = useRouter();

  useEffect(() => {
    const gameId = localStorage.getItem('gameId');

    if (freeRoutes.includes(router.asPath) || router.asPath.includes('/admin')) {
      return;
    }

    if (!gameId || !['/game', '/introduction', '/select'].includes(router.asPath)) {
      router.push({
        pathname: '/start'
      });
    }
  }, []);

  return children;
}

export default RouteGuard;
