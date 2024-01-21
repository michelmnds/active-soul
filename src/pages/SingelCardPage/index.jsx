/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useParams } from "react-router-dom";
import { danceData } from "../../data/danceData";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const SingleDancePage = () => {
  const { danceId } = useParams();
  const [dance, setDance] = useState({});

  useEffect(() => {
    setDance(danceData.find((dance) => dance.id == danceId));
  }, []);

  return (
    <div className="singleDanceContainer">
      <div
        className="singleDanceImg"
        style={{ backgroundImage: `url(${dance.image})` }}
      />

      <div className="singleDanceInfos">
        <h2 className="singleDanceName">{dance.name}</h2>

        <h3 className="singleDanceModality">{dance.modality}</h3>

        <span className="singleDanceDesc">{dance.description}</span>
      </div>

      <div className="singleDanceBtnContainer">
        <a href="#" className="singleDanceBtn">
          CONTACTE-NOS
        </a>
      </div>
    </div>
  );
};
