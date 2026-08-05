import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { DancePage } from "./pages/DancePage";
import { NewsPage } from "./pages/NewsPage";
import { AboutPage } from "./pages/AboutPage";
import { TeamPage } from "./pages/TeamPage";
import { SingleDancePage } from "./pages/SingelCardPage";
import { SingleNewPage } from "./pages/SingleNewPage";
import { SingleClassPage } from "./pages/SingleClassPage";
import { ClassPage } from "./pages/ClassPage";
import { MantineProvider } from "@mantine/core";
import { ServicePage } from "./pages/ServicePage";
import { SingleServicePage } from "./pages/SingleServicePage";
import { ArtPage } from "./pages/ArtPage";
import { SingleArtPage } from "./pages/SingleArtPage";
import { Layout } from "@/ui/layout";

export const App = () => {
  return (
    <MantineProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dancas" element={<DancePage />} />
          <Route path="/danca/:danceId" element={<SingleDancePage />} />
          <Route path="/eventos" element={<NewsPage />} />
          <Route path="/evento/:currentNewId" element={<SingleNewPage />} />
          <Route path="/aulas" element={<ClassPage />} />
          <Route path="/aula/:currentClassId" element={<SingleClassPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/equipa" element={<TeamPage />} />
          <Route path="/artes" element={<ArtPage />} />
          <Route path="/arte/:artId" element={<SingleArtPage />} />
          <Route path="/servicos" element={<ServicePage />} />
          <Route path="/servico/:currentServiceId" element={<SingleServicePage />} />
          <Route path="*" element={<LandingPage />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
};

export default App;
