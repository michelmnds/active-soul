import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";
import { DancePage } from "./pages/DancePage";
import { NewsPage } from "./pages/NewsPage";
import { AboutPage } from "./pages/AboutPage";
import { TeamPage } from "./pages/TeamPage";
import { SideBar } from "./components/SideBar";
import { SingleDancePage } from "./pages/SingelCardPage";
import { SingleNewPage } from "./pages/SingleNewPage";
import { SingleClassPage } from "./pages/SingleClassPage";
import { ClassPage } from "./pages/ClassPage";
import { MantineProvider } from "@mantine/core";
import { ServicePage } from "./pages/ServicePage";
import { SingleServicePage } from "./pages/SingleServicePage";
import { MusicPlayer } from "./components/MusicPlayer";
import { ArtPage } from "./pages/ArtPage";
import { SingleArtPage } from "./pages/SingleArtPage";
import { Inscricao } from "./components/Inscrição";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App = () => {
  useEffect(() => {
    setTimeout(() => setInscricao(true), 3000);
  }, []);

  const [menu, setMenu] = useState(false);
  const [inscricao, setInscricao] = useState(false);

  return (
    <MantineProvider>
      {inscricao && <Inscricao setInscricao={setInscricao} />}
      <Header menu={menu} setMenu={setMenu} setInscricao={setInscricao} />
      <MusicPlayer />
      <SideBar menu={menu} setMenu={setMenu} setInscricao={setInscricao} />
      <Routes>
        <Route
          path="/"
          element={<LandingPage setMenu={setMenu} menu={menu} />}
        />

        <Route path="/dancas" element={<DancePage menu={menu} />} />
        <Route
          path="/danca/:danceId"
          element={<SingleDancePage menu={menu} />}
        />

        <Route path="/eventos" element={<NewsPage menu={menu} />} />
        <Route
          path="/evento/:currentNewId"
          element={<SingleNewPage menu={menu} />}
        />

        <Route path="/aulas" element={<ClassPage menu={menu} />} />
        <Route
          path="/aula/:currentClassId"
          element={<SingleClassPage menu={menu} />}
        />

        <Route path="/sobre" element={<AboutPage menu={menu} />} />

        <Route path="/equipa" element={<TeamPage menu={menu} />} />

        <Route path="/artes" element={<ArtPage menu={menu} />} />
        <Route path="/arte/:artId" element={<SingleArtPage menu={menu} />} />

        <Route path="/servicos" element={<ServicePage menu={menu} />} />
        <Route
          path="/servico/:currentServiceId"
          element={<SingleServicePage menu={menu} />}
        />

        <Route path="*" element={<LandingPage />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </MantineProvider>
  );
};

export default App;
