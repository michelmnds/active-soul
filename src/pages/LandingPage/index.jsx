import "./style.css";
import { danceData } from "../../danceData";
import { newsData } from "../../newsData";
import { DanceCard } from "../../components/DanceCard";
import { Link } from "react-router-dom";
import { NewsCard } from "../../components/NewsCard";

export const LandingPage = () => {
  return (
    <>
      <div className="landingImage" />
      <div className="titleContainer">
        <h1 className="landingTitle">Bem-vindo à Active Soul!</h1>
      </div>
      <div className="landingContainer">
        <main className="landingMain">
          <div className="danceContainer">
            <h2 className="mainTitle">Vem dançar conosco!</h2>

            {danceData.map((dance) => {
              return (
                <DanceCard
                  key={dance.id}
                  img={dance.image}
                  name={dance.name}
                  description={dance.description}
                  modality={dance.modality}
                />
              );
            })}

            <Link className="danceBtn">VER TODAS AS MODALIDADES</Link>
          </div>

          <hr className="line" />

          <div className="newsContainer">
            <h2 className="mainTitle">Próximos eventos</h2>
            {newsData.map((currentNew) => {
              return (
                <NewsCard
                  key={currentNew.id}
                  img={currentNew.image}
                  name={currentNew.name}
                  description={currentNew.description}
                />
              );
            })}

            <Link className="newsBtn">VER CALENDÁRIO</Link>
          </div>
        </main>
      </div>
    </>
  );
};
