import { Outlet } from "react-router-dom";
import { ScrollManager } from "@/ui/components";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SoundToggle } from "./SoundToggle";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <SoundToggle />
      <ScrollManager />
    </div>
  );
}
