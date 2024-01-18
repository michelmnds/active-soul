import "./style.css";
import { TeamCard } from "../../components/TeamCard";
import { teamData } from "../../data/teamData";

export const TeamPage = () => {
  return (
    <div className="teamPageContainer">
      <div className="teamBackground">
        <h2 className="teamPageTitle">Conheça a equipa!</h2>
      </div>

      <main className="teamPageMain">
        {teamData.map((member) => {
          return (
            <TeamCard
              key={member.id}
              img={member.image}
              name={member.name}
              age={member.age}
              modality={member.modality}
            />
          );
        })}
      </main>
    </div>
  );
};
