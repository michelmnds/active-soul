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
      <SideBar menu={menu} setMenu={setMenu} />
      <Routes>
        <Route path="/" element={<LandingPage menu={menu} />} />
        <Route path="/dancas" element={<DancePage menu={menu} />} />
        <Route path="/eventos" element={<NewsPage menu={menu} />} />
        <Route path="/sobre" element={<AboutPage menu={menu} />} />
        <Route path="/equipa" element={<TeamPage menu={menu} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
