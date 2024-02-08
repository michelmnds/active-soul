/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useParams } from "react-router-dom";
import { servicesData } from "../../data/servicesData";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
export const SingleServicePage = ({ menu }) => {
  const { currentServiceId } = useParams();
  const [currentClass, setCurrentClass] = useState({});
  useEffect(() => {
    setCurrentClass(
      servicesData.find((currentClass) => currentClass.id == currentServiceId)
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
          <h2 className="singleDanceName">{currentClass.title}</h2>

          <span
            className="singleDanceDesc"
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          ></span>

          <a href="#" className="singleDanceBtn">
            CONTACTE-NOS
          </a>
        </div>
      </div>
    );
  }
};
