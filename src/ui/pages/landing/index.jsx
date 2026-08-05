import { useDocumentTitle } from "@/hooks";
import { Hero, Highlights, Timetable, VideoIntro } from "./_partials";

export function LandingPage() {
  useDocumentTitle("");
  return (
    <>
      <Hero />
      <Highlights />
      <VideoIntro />
      <Timetable />
    </>
  );
}
