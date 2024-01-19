import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { DancePage } from "./pages/DancePage";
import { NewsPage } from "./pages/NewsPage";
import { AboutPage } from "./pages/AboutPage";
import { TeamPage } from "./pages/TeamPage";
import { SideBar } from "./components/SideBar";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Header menu={menu} setMenu={setMenu} />
      <SideBar menu={menu} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dancas" element={<DancePage />} />
        <Route path="/eventos" element={<NewsPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/equipa" element={<TeamPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
