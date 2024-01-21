/* eslint-disable react/prop-types */
import "./style.css";
import { danceData } from "../../data/danceData";
import { DanceCard } from "../../components/DanceCard";

export const DancePage = ({ menu }) => {
  return (
    <div className={`dancePageContainer ${menu ? "move" : ""}`}>
      <div className="danceBackground">
        <div className="danceTitleContainer">
          <h2 className="dancePageTitle">Vem dançar conosco!</h2>
        </div>
      </div>

      <main className="dancePageMain">
        {danceData.map((dance) => {
          return (
            <DanceCard
              key={dance.id}
              id={dance.id}
              img={dance.image}
              name={dance.name}
              description={dance.description}
              modality={dance.modality}
            />
          );
        })}
      </main>
    </div>
  );
};
