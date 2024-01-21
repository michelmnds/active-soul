/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useParams } from "react-router-dom";
import { newsData } from "../../data/newsData";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const SingleNewPage = ({ menu }) => {
  const { currentNewId } = useParams();
  const [currentNew, setCurrentNew] = useState({});
  useEffect(() => {
    setCurrentNew(newsData.find((currentNew) => currentNew.id == currentNewId));
  }, []);

  if (currentNew.id) {
    return (
      <div className={`singleNewContainer ${menu ? "move" : ""}`}>
        <div
          className="singleNewImg"
          style={{ backgroundImage: `url(${currentNew.image})` }}
        />

        <div className="singleNewInfos">
          <h2 className="singleNewName">{currentNew.name}</h2>

          <h3 className="singleNewModality">{currentNew.modality}</h3>

          <span className="singleNewDesc">{currentNew.description}</span>

          <span className="singleNewText">Agenda: </span>

          <section className="newsSchedule">
            {currentNew.schedule.map((currentNew) => {
              return (
                <div key={currentNew.day} className="newContainer">
                  <span className="newDay">{currentNew.day}</span>
                  <span className="newTime">{currentNew.time}</span>
                  <span className="newLocation">{currentNew.location}</span>
                </div>
              );
            })}
          </section>

          <a href="#" className="singleNewBtn">
            CONTACTE-NOS
          </a>
        </div>
      </div>
    );
  }
};
