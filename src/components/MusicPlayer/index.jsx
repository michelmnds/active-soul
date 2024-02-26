import { useEffect, useRef, useState } from "react";
import "./style.css";
import music from "../../assets/music/dance_for_me_wallis.mp3";

import soundOn from "../../assets/icon/sound-icon.png";
import soundOff from "../../assets/icon/mute-icon.png";

export const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);

  const toggleMute = () => {
    audioRef.current.muted = !muted;
    setMuted(!muted);
  };

  useEffect(() => {
    audioRef.current.volume = 0.02;
  }, []);

  return (
    <>
      <audio
        id="musicPlayer"
        ref={audioRef}
        className="musicPlayer"
        autoPlay
        loop
      >
        <source src={music} type="audio/mpeg" />
      </audio>
      <button className="musicIcon" onClick={toggleMute}>
        {muted ? (
          <img src={soundOff} alt="sound off icon" />
        ) : (
          <img src={soundOn} alt="sound on icon" />
        )}
      </button>
    </>
  );
};
