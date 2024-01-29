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
    const formattedDescription = currentNew.description.replace(/\./g, ".<br>");

    return (
      <div className={`singleNewContainer ${menu ? "move" : ""}`}>
        <div
          className="singleNewImg"
          style={{ backgroundImage: `url(${currentNew.image})` }}
        />

        <div className="singleNewInfos">
          <h2 className="singleNewName">{currentNew.name}</h2>

          <span className="singleNewDesc">Publicado em: {currentNew.date}</span>

          <span
            className="singleNewDesc"
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          ></span>

          {currentNew.link ? (
            <a
              className="link"
              href={currentNew.link}
              target="_blank"
              rel="noreferrer"
            >
              Vídeo
            </a>
          ) : null}

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
