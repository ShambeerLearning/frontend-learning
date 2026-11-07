import { useMemo } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export function Layout() {
  const { pathname } = useLocation();
  const isHomePage = useMemo(() => pathname === "/", [pathname]);
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black text-black dark:text-white px-6 py-5">
      <Link to="/">
        <img
          src="/netflix.jpg"
          alt="Netflix"
          className="h-8 auto height-20 width-20"
        />
      </Link>
      <Outlet />
    </div>
  );
}
