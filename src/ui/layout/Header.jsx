import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LuMenu } from "react-icons/lu";
import logo from "@/assets/logo-png.png";
import { site } from "@/content/site";
import { Button } from "@/ui/components";
import { MobileDrawer } from "./MobileDrawer";

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur-md">
      <div className="container flex h-20 items-center gap-8">
        <Link to="/" className="shrink-0" aria-label="Active Soul, página inicial">
          <img src={logo} alt="Active Soul" className="h-12 w-auto" />
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-5 xl:gap-7 lg:flex" aria-label="Navegação principal">
          {site.nav.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) => `relative py-2 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-accent after:transition-transform ${isActive ? "text-accent after:scale-x-100" : "text-brand-800 after:scale-x-0 hover:text-accent hover:after:scale-x-100"}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Button className="ml-auto hidden lg:inline-flex" href={site.socials.whatsapp} target="_blank" rel="noreferrer">Marcar aula</Button>
        <button className="ml-auto grid size-11 place-items-center rounded-full border border-brand-200 text-brand-950 lg:hidden" onClick={() => setDrawerOpen(true)} aria-label="Abrir menu" aria-expanded={drawerOpen} aria-controls="mobile-navigation" type="button">
          <LuMenu className="text-2xl" aria-hidden />
        </button>
      </div>
      <MobileDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
