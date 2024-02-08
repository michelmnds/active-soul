/* eslint-disable no-unused-vars */
import "./style.css";

import { LandingCard } from "../../components/LandingCard";
import { Infos } from "../../components/Infos";

// eslint-disable-next-line react/prop-types
export const LandingPage = ({ menu }) => {
  return (
    <>
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
              image={"https://i.imgur.com/GtrHOu1.jpg"}
              link={"/dancas"}
              title={"Aulas de dança"}
            ></LandingCard>
          </div>

          <div className="classContainer">
            <LandingCard
              image={"https://i.imgur.com/mlQyZX8.jpg"}
              link={"/aulas"}
              title={"Aulas de bem estar"}
            ></LandingCard>
          </div>

          <div className="newsContainer">
            <LandingCard
              image={"https://i.imgur.com/iCriVFr.png"}
              link={"/eventos"}
              title={"Próximos eventos"}
            ></LandingCard>
          </div>

          <div className="serviceContainer">
            <LandingCard
              image={"https://i.imgur.com/QS2hIRO.jpg"}
              link={"/servicos"}
              title={"Serviços"}
            ></LandingCard>
          </div>
        </main>
      </div>
    </>
  );
};
