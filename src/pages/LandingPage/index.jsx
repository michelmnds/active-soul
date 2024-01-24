import "./style.css";

import { danceData } from "../../data/danceData";
import { newsData } from "../../data/newsData";
import { classData } from "../../data/classData";

import { Link } from "react-router-dom";

import { DanceCard } from "../../components/DanceCard";
import { NewsCard } from "../../components/NewsCard";
import { ClassCard } from "../../components/ClassCard";

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
            <h2 className="mainTitle">Vem dançar conosco!</h2>

            {danceData
              .map((dance) => {
                return (
                  <DanceCard
                    key={dance.id}
                    id={dance.id}
                    img={dance.image}
                    name={dance.name}
                    teacher={dance.teacher}
                    description={dance.description}
                    modality={dance.modality}
                  />
                );
              })
              .slice(0, 3)}

            <Link to="/dancas" className="danceBtn">
              VER TODAS AS MODALIDADES
            </Link>
          </div>

          <hr className="line" />

          <div className="newsContainer">
            <h2 className="mainTitle">Próximos eventos</h2>
            {newsData
              .map((currentNew) => {
                return (
                  <NewsCard
                    key={currentNew.id}
                    id={currentNew.id}
                    img={currentNew.image}
                    name={currentNew.name}
                    description={currentNew.description}
                  />
                );
              })
              .slice(0, 3)}

            <Link to="/eventos" className="newsBtn">
              VER CALENDÁRIO
            </Link>
          </div>

          <hr className="line" />

          <div className="classContainer">
            <h2 className="mainTitle">Bem estar</h2>
            {classData
              .map((currentClass) => {
                return (
                  <ClassCard
                    key={currentClass.id}
                    id={currentClass.id}
                    img={currentClass.image}
                    name={currentClass.name}
                    description={currentClass.description}
                  />
                );
              })
              .slice(0, 3)}

            <Link to="/aulas" className="danceBtn">
              VER TODAS AS AULAS
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};
