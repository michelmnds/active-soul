import { Outlet } from "react-router-dom";
import { ScrollManager } from "@/ui/components";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SoundToggle } from "./SoundToggle";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="fixed left-4 top-3 z-[120] -translate-y-20 rounded-pill bg-accent px-5 py-3 font-semibold text-white shadow-pill transition-transform focus:translate-y-0">Saltar para o conteúdo</a>
      <Header />
      <main id="main-content" className="flex-1" tabIndex="-1">
        <Outlet />
      </main>
      <Footer />
      <SoundToggle />
      <ScrollManager />
    </div>
  );
}
