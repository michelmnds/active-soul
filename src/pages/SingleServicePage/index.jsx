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
      <div className={`singleServiceContainer ${menu ? "move" : ""}`}>
        <div
          className="singleServiceImg"
          style={{ backgroundImage: `url(${currentClass.image})` }}
        />

        <div className="singleServiceInfos">
          <h2 className="singleServiceName">{currentClass.title}</h2>

          <span
            className="singleServiceDesc"
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          ></span>

          <a href="#" className="singleServiceBtn">
            CONTACTE-NOS
          </a>
        </div>
      </div>
    );
  }
};
