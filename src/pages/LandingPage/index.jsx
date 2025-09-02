/* eslint-disable no-unused-vars */
import "./style.css";
import { LandingCard } from "../../components/LandingCard";
import { useState } from "react";
import { Modal } from "../../components/Modal";

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
            <h1 className="landingTitle">Bem-vindo ao Active Soul!</h1>
          </div>
        </div>
      </div>

      <div className={`landingVideoContainer ${menu ? "move" : ""}`}>
        <div className="landingMain">
          <iframe
            className="videoPlayer"
            src={`https://www.youtube.com/embed/70_mQYFayY8`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: 10,
            }}
          >
            <h1 className="videoTitle">Marca já a tua aula experimental!</h1>
            <a
              href="https://wa.me/message/P62IN6OYSZ5YN1"
              className="landingBtn"
              target="_blank"
              rel="noreferrer"
            >
              Marcar aula
            </a>
          </div>
        </div>
      </div>

      <div className={`landingContainer ${menu ? "move" : ""}`}>
        <main className="landingMain">
          <div className="danceContainer">
            <LandingCard
              image={"https://i.imgur.com/I7JmZ4d.jpg"}
              link={"/dancas"}
              title={"Dança"}
            ></LandingCard>
          </div>

          <div className="classContainer">
            <LandingCard
              image={"https://imgur.com/rvjQd6o.jpg"}
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
              image={"https://imgur.com/eMyRUEz.png"}
              link={"/servicos"}
              title={"Serviços"}
            ></LandingCard>
          </div>
        </main>
      </div>
      <div className="tableContainer">
        <span className="tableTxt">Horário 2025:</span>
        <div className="table" onClick={handleModalOpening} />
      </div>
    </>
  );
};
