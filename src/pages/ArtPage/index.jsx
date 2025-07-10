/* eslint-disable react/prop-types */
import "./style.css";
import { artData } from "../../data/artData";
import { ArtCard } from "../../components/ArtCard";

export const ArtPage = ({ menu }) => {
  return (
    <div className={`dancePageContainer ${menu ? "move" : ""}`}>
      <div className="danceBackground">
        <div className="danceTitleContainer">
          <h2 className="dancePageTitle">Artes</h2>
        </div>
      </div>

      <main className="dancePageMain">
        {artData.map((dance) => {
          return (
            <ArtCard
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
