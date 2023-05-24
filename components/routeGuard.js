import { useEffect } from 'react';
import { useRouter } from 'next/router';

const freeRoutes = ['/start', '/presentation', '/info'];
function RouteGuard({ children }) {
  const router = useRouter();

  useEffect(() => {
    const gameId = localStorage.getItem('gameId');
    console.log(router.pathname, gameId)
    if (freeRoutes.includes(router.pathname) || router.pathname.includes('/admin')) {
      return;
    }

    if (!gameId || !['/game', '/introduction', '/select', '/game/finalize', '/game/questions/[id]', '/references'].includes(router.asPath)) {
      router.push({
        pathname: '/start'
      });
    }
  }, []);

  return children;
}

export default RouteGuard;
