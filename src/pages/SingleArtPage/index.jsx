/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useParams } from "react-router-dom";
import { artData } from "../../data/artData";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const SingleArtPage = ({ menu }) => {
  const { artId } = useParams();
  const [art, setArt] = useState({});

  useEffect(() => {
    setArt(artData.find((art) => art.id == artId));
  }, []);

  if (art.id) {
    const formattedDescription = art.description.replace(
      // eslint-disable-next-line no-useless-escape
      /[\.\;\:]/g,
      (match) => {
        if (match === ".") {
          return ".<br />";
        } else if (match === ";") {
          return ";<br />";
        } else if (match === ":") {
          return ":<br />";
        }
      }
    );
    return (
      <div className={`singleartContainer ${menu ? "move" : ""}`}>
        <div
          className="singleArtImg"
          style={{ backgroundImage: `url(${art.image})` }}
        />

        <div className="singleArtInfos">
          <h2 className="singleArtName">{art.name}</h2>

          <h3 className="singleArtModality">{art.modality}</h3>

          <span
            className="singleArtDesc"
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          ></span>

          <span className="singleArtText">Horário: </span>

          <section className="schedule">
            {art.schedule.map((day) => {
              return (
                <div key={day.day} className="dayContainer">
                  <span className="dayDay">{day.day}</span>
                  <div className="dayInfosContainer">
                    <span className="dayTime">
                      <strong>Horário</strong>: {day.time}
                    </span>
                    <span className="dayTeacher">
                      <strong>Professor</strong>: {day.teacher}
                    </span>
                    <span className="dayTeacher">
                      <strong>Modalidade</strong>: {day.type}
                    </span>
                  </div>
                </div>
              );
            })}
          </section>

          <a
            href="https://wa.me/message/P62IN6OYSZ5YN1"
            className="singleArtBtn"
            target="_blank"
            rel="noreferrer"
          >
            CONTACTE-NOS
          </a>
        </div>
      </div>
    );
  }
};
