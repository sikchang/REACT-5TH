import { NAV } from '@/utils/nav-config';
import { useEffect, useState } from 'react';
import { NavLink } from "react-router";

function GlobalNav() {

  // const navList = [
  //   { to:'/', label:'Home'},
  //   { to:'/about', label:'About'},
  //   { to:'/auth/login', label:'Login'},
  //   { to:'/auth/register', label: 'Register' },
  //   { to:'/concerts', label: 'Concerts' },
  //   { to:'/concerts/trending', label: 'Trending' }
  // ]


  // const navList = extractNavItems(routes.routes);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) {
      // ....
      // localStorage.getItem()
    }
  }, [mounted]);

  return (
    <header style={{padding:8, borderBottom: '1px solid #eee'}}>
      <nav style={{display:'flex', gap: 12}}>
        {
          NAV.map(({ to, label }) => (
            <NavLink key={to} to={to}>{label}</NavLink>
          ))
        }
      </nav>
    </header>
  );
}
export default GlobalNav;
