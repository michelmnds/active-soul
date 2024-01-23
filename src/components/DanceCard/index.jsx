/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.css";

// eslint-disable-next-line no-unused-vars
export const DanceCard = ({ id, img, name, description }) => {
  return (
    <div className="landingCard">
      <div style={{ backgroundImage: `url(${img})` }} className="cardImg" />

      <div className="infoContainer">
        <span className="cardName">{name}</span>
        <span className="cardDesc">{description.slice(0, 100)}...</span>
        <Link to={`/danca/${id}`} className="cardMore">
          <span>Ver mais</span>
          <span>&gt;</span>
        </Link>
      </div>
    </div>
  );
};
