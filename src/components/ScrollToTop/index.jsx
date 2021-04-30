import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ScrollToTop({ fieldRef }) {
  // console.log(pathname);
  const { pathname, search } = useLocation();
  // console.log(pathname.includes('new-detail'));
  useEffect(() => {
    if (fieldRef?.current) {
      if (pathname === '/') {
        // console.log(pathname);
        if (search) {
          window.scrollTo({ top: fieldRef.current.offsetTop - 80, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (pathname.includes('new-detail')) {
        if (!search) {
          window.scrollTo({ top: fieldRef.current.offsetTop - 80, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: fieldRef.current.offsetTop - 80, behavior: 'smooth' });
      }
    }
  }, [pathname, fieldRef, search]);

  return null;
}

// else if (pathname.includes('new-detail')) {
//   if (!search) {
//     window.scrollTo({ top: fieldRef.current.offsetTop - 80, behavior: 'smooth' });
//   } else {
//     const page = queryString.parse(search, { parseNumbers: true });
//     console.log([fieldRef.current.querySelector('.comments-list')]);
//     window.scrollTo({
//       top: fieldRef.current.querySelector('.comments-list').offsetTop + 500,
//       behavior: 'smooth',
//     });
//   }
// }
