/* eslint-disable react/prop-types */
import "./style.css";
import { classData } from "../../data/classData";
import { ClassCard } from "../../components/ClassCard";

export const ClassPage = ({ menu }) => {
  return (
    <div className={`classPageContainer ${menu ? "move" : ""}`}>
      <div className="classBackground">
        <div className="classTitleContainer">
          <h2 className="classPageTitle">Bem estar</h2>
        </div>
      </div>

      <main className="classPageMain">
        {classData.map((currentClass) => {
          return (
            <ClassCard
              key={currentClass.id}
              id={currentClass.id}
              img={currentClass.image}
              name={currentClass.name}
              description={currentClass.description}
              modality={currentClass.modality}
            />
          );
        })}
      </main>
    </div>
  );
};
