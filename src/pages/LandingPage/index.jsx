import "./style.css";
import { danceData } from "../../danceData";
import { LandingCard } from "../../components/LandingCard";

export const LandingPage = () => {
  return (
    <>
      <div className="landingImage" />
      <div className="titleContainer">
        <h1 className="landingTitle">Bem-vindo à Active Soul!</h1>
      </div>
      <div className="landingContainer">
        <main className="landingMain">
          <h2 className="mainTitle">Vem dançar conosco!</h2>

          {danceData.map((dance) => {
            return (
              <LandingCard
                key={dance.id}
                img={dance.image}
                name={dance.name}
                description={dance.description}
                modality={dance.modality}
              />
            );
          })}
        </main>
      </div>
    </>
  );
};
