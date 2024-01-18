import "./style.css";
import { danceData } from "../../data/danceData";
import { DanceCard } from "../../components/DanceCard";

export const DancePage = () => {
  return (
    <div className="dancePageContainer">
      <div className="danceBackground">
        <h2 className="dancePageTitle">Vem dançar conosco!</h2>
      </div>

      <main className="dancePageMain">
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
      </main>
    </div>
  );
};
