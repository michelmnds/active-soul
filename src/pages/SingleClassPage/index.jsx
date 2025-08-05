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

          <h3 className="singleDanceModality">{currentClass.modality}</h3>

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
