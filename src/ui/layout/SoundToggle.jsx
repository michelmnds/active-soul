import { useRef, useState } from "react";
import { LuVolume2, LuVolumeX } from "react-icons/lu";

const music = "/music/dance_for_me_wallis.mp3";

export function SoundToggle() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  async function toggleSound() {
    if (!audioRef.current) return;
    if (!hasLoaded) {
      audioRef.current.src = music;
      audioRef.current.volume = 0.1;
      setHasLoaded(true);
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  }

  return (
    <>
      <audio ref={audioRef} loop preload="none" />
      <button className="fixed bottom-5 right-5 z-40 flex min-h-11 items-center gap-2 rounded-pill bg-brand-950 px-4 py-2.5 text-sm font-medium text-white shadow-card transition hover:bg-brand-800" onClick={toggleSound} aria-pressed={isPlaying} aria-label={isPlaying ? "Desligar música" : "Ligar música"} type="button">
        {isPlaying ? <LuVolume2 className="text-lg" aria-hidden /> : <LuVolumeX className="text-lg" aria-hidden />}
        <span className="hidden sm:inline">{isPlaying ? "Som ligado" : "Som"}</span>
      </button>
    </>
  );
}
