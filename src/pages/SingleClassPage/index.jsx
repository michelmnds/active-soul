/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useParams } from "react-router-dom";
import { classData } from "../../data/classData";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const SingleClassPage = ({ menu }) => {
  const { currentClassId } = useParams();
  const [currentClass, setCurrentClass] = useState({});
  useEffect(() => {
    setCurrentClass(
      classData.find((currentClass) => currentClass.id == currentClassId)
    );
  }, []);

  if (currentClass.id) {
    const formattedDescription = currentClass.description.replace(
      /\./g,
      ".<br />"
    );
    return (
      <div className={`singleDanceContainer ${menu ? "move" : ""}`}>
        <div
          className="singleDanceImg"
          style={{ backgroundImage: `url(${currentClass.image})` }}
        />

        <div className="singleDanceInfos">
          <h2 className="singleDanceName">{currentClass.name}</h2>

          <span
            className="singleDanceDesc"
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          ></span>

          <span className="singleDanceText">Horário: </span>

          <section className="schedule">
            {currentClass.schedule.map((day) => {
              return (
                <div key={day.day} className="dayContainer">
                  <span className="dayDay">{day.day}</span>
                  <div className="dayInfosContainer">
                    <span className="dayTime">
                      <strong>Horário</strong>: {day.time}
                    </span>
                    <span className="dayTeacher">
                      <strong>Aula por</strong>: {day.teacher}
                    </span>
                  </div>
                </div>
              );
            })}
          </section>

          <a href="#" className="singleDanceBtn">
            CONTACTE-NOS
          </a>
        </div>
      </div>
    );
  }
};
