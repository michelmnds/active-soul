/* eslint-disable no-unused-vars */
import "./style.css";

import { LandingCard } from "../../components/LandingCard";
import { Infos } from "../../components/Infos";
import { useState } from "react";
import { Modal } from "../../components/Modal";
import SpotifyPlayer from "react-spotify-web-playback";
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

// eslint-disable-next-line react/prop-types
export const LandingPage = ({ menu }) => {
  const [tableModal, setTableModal] = useState(false);

  const handleModalOpening = () => {
    setTableModal(true);
  };

  return (
    <>
      {tableModal && (
        <Modal
          from={"table"}
          setTableModal={setTableModal}
          tableModal={tableModal}
        />
      )}

      <div className="landingTopContainer">
        <div className={`landingImage ${menu ? "move" : ""}`} />
        <div className={`titleBackground ${menu ? "move" : ""}`}>
          <div className="titleContainer">
            <h1 className="landingTitle">Bem-vindo à Active Soul!</h1>
          </div>
        </div>
      </div>

      <div className={`landingContainer ${menu ? "move" : ""}`}>
        <main className="landingMain">
          <div className="danceContainer">
            <LandingCard
              image={"https://i.imgur.com/6gyDQpv.jpg"}
              link={"/dancas"}
              title={"Dança"}
            ></LandingCard>
          </div>

          <div className="classContainer">
            <LandingCard
              image={"https://i.imgur.com/mlQyZX8.jpg"}
              link={"/aulas"}
              title={"Bem Estar"}
            ></LandingCard>
          </div>

          <div className="newsContainer">
            <LandingCard
              image={"https://i.imgur.com/JfVouRR.jpg"}
              link={"/eventos"}
              title={"Próximos eventos"}
            ></LandingCard>
          </div>

          <div className="serviceContainer">
            <LandingCard
              image={"https://i.imgur.com/kl2JIqp.png"}
              link={"/servicos"}
              title={"Serviços"}
            ></LandingCard>
          </div>
        </main>
      </div>

      <div className="tableContainer">
        <span className="tableTxt">Horário 2024/2025:</span>
        <div className="table" onClick={handleModalOpening} />
      </div>
    </>
  );
};
