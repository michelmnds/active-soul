import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
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
import { SingleDancePage } from "./pages/SingelCardPage";
import { SingleNewPage } from "./pages/SingleNewPage";
import { SingleClassPage } from "./pages/SingleClassPage";
import { ClassPage } from "./pages/ClassPage";
import { MantineProvider } from "@mantine/core";
import { ServicePage } from "./pages/ServicePage";
import { SingleServicePage } from "./pages/SingleServicePage";

function App() {
  const [menu, setMenu] = useState(false);

  return (
    <MantineProvider>
      <Header menu={menu} setMenu={setMenu} />
      <SideBar menu={menu} setMenu={setMenu} />
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

        <Route path="/servicos" element={<ServicePage menu={menu} />} />
        <Route
          path="/servico/:currentServiceId"
          element={<SingleServicePage menu={menu} />}
        />

        <Route path="*" element={<LandingPage />} />
      </Routes>
      <Footer />
    </MantineProvider>
  );
}

export default App;
