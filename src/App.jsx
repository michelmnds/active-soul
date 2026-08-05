import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { DancesPage } from "@/ui/pages/dancas";
import { NewsPage } from "./pages/NewsPage";
import { AboutPage } from "./pages/AboutPage";
import { TeamPage } from "./pages/TeamPage";
import { DancePage } from "@/ui/pages/danca";
import { SingleNewPage } from "./pages/SingleNewPage";
import { ClassPage } from "@/ui/pages/aula";
import { ClassesPage } from "@/ui/pages/aulas";
import { MantineProvider } from "@mantine/core";
import { ServicePage } from "./pages/ServicePage";
import { SingleServicePage } from "./pages/SingleServicePage";
import { ArtPage } from "@/ui/pages/arte";
import { ArtsPage } from "@/ui/pages/artes";
import { Layout } from "@/ui/layout";
import { NotFoundPage } from "@/ui/pages/not-found";

export const App = () => {
  return (
    <MantineProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dancas" element={<DancesPage />} />
          <Route path="/danca/:id" element={<DancePage />} />
          <Route path="/eventos" element={<NewsPage />} />
          <Route path="/evento/:currentNewId" element={<SingleNewPage />} />
          <Route path="/aulas" element={<ClassesPage />} />
          <Route path="/aula/:id" element={<ClassPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/equipa" element={<TeamPage />} />
          <Route path="/artes" element={<ArtsPage />} />
          <Route path="/arte/:id" element={<ArtPage />} />
          <Route path="/servicos" element={<ServicePage />} />
          <Route path="/servico/:currentServiceId" element={<SingleServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
};

export default App;
