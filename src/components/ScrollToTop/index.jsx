import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop({ fieldRef }) {
  // console.log(pathname);
  const { pathname, search } = useLocation();
  useEffect(() => {
    if (pathname === '/') {
      // console.log(pathname);
      if (search) {
        window.scrollTo({ top: fieldRef.current.offsetTop - 80, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: fieldRef.current.offsetTop - 80, behavior: 'smooth' });
    }
  }, [pathname, fieldRef, search]);

  return null;
}
