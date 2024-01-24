/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.css";

// eslint-disable-next-line no-unused-vars
export const ClassCard = ({ id, img, name, description }) => {
  return (
    <div className="classCard">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="classCardImg"
      />

      <div className="classInfoContainer">
        <span className="classCardName">{name}</span>
        <span className="classCardDesc">{description.slice(0, 100)}...</span>
        <Link to={`/aula/${id}`} className="classCardMore">
          <span>Ver mais</span>
          <span>&gt;</span>
        </Link>
      </div>
    </div>
  );
};
