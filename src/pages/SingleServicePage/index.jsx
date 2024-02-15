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
      // eslint-disable-next-line no-useless-escape
      /[\.\*]/g,
      (match) => {
        if (match === ".") {
          return ".<br />";
        } else if (match === "*") {
          return "<br />";
        }
      }
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

          <a
            href="https://wa.me/message/P62IN6OYSZ5YN1"
            className="singleServiceBtn"
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
