import "@mantine/carousel/styles.css";
import "@mantine/core/styles.css";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "@/ui/pages/landing";
import { DancesPage } from "@/ui/pages/dancas";
import { EventsPage } from "@/ui/pages/eventos";
import { AboutPage } from "@/ui/pages/sobre";
import { TeamPage } from "@/ui/pages/equipa";
import { DancePage } from "@/ui/pages/danca";
import { EventPage } from "@/ui/pages/evento";
import { ClassPage } from "@/ui/pages/aula";
import { ClassesPage } from "@/ui/pages/aulas";
import { MantineProvider } from "@mantine/core";
import { ServicePage } from "@/ui/pages/servico";
import { ServicesPage } from "@/ui/pages/servicos";
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
          <Route path="/eventos" element={<EventsPage />} />
          <Route path="/evento/:id" element={<EventPage />} />
          <Route path="/aulas" element={<ClassesPage />} />
          <Route path="/aula/:id" element={<ClassPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/equipa" element={<TeamPage />} />
          <Route path="/artes" element={<ArtsPage />} />
          <Route path="/arte/:id" element={<ArtPage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/servico/:id" element={<ServicePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </MantineProvider>
  );
};

export default App;
