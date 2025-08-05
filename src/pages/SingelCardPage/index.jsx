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
    const formattedDescription = dance.description.replace(
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
      <div className={`singleDanceContainer ${menu ? "move" : ""}`}>
        <div
          className="singleDanceImg"
          style={{ backgroundImage: `url(${dance.image})` }}
        />

        <div className="singleDanceInfos">
          <h2 className="singleDanceName">{dance.name}</h2>

          <h3 className="singleDanceModality">{dance.modality}</h3>

          <span
            className="singleDanceDesc"
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          ></span>

          <a
            href="https://wa.me/message/P62IN6OYSZ5YN1"
            className="singleDanceBtn"
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
