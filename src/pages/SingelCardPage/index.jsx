/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useParams } from "react-router-dom";
import { danceData } from "../../data/danceData";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const SingleDancePage = ({ menu }) => {
  const { danceId } = useParams();
  const [dance, setDance] = useState({});
  useEffect(() => {
    setDance(danceData.find((dance) => dance.id == danceId));
  }, []);

  if (dance.id) {
    return (
      <div className={`singleDanceContainer ${menu ? "move" : ""}`}>
        <div
          className="singleDanceImg"
          style={{ backgroundImage: `url(${dance.image})` }}
        />

        <div className="singleDanceInfos">
          <h2 className="singleDanceName">{dance.name}</h2>

          <h3 className="singleDanceModality">{dance.modality}</h3>

          <span className="singleDanceDesc">{dance.description}</span>

          <span className="singleDanceText">Agenda: </span>

          <section className="schedule">
            {dance.schedule.map((day) => {
              return (
                <div key={day.day} className="dayContainer">
                  <span className="dayDay">{day.day}</span>
                  <span className="dayTime">{day.time}</span>
                  <span className="dayTeacher">{day.teacher}</span>
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
