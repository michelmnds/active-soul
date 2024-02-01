/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.css";

// eslint-disable-next-line no-unused-vars
export const DanceCard = ({ id, img, name, description }) => {
  return (
    <Link
      to={`/danca/${id}`}
      style={{ backgroundImage: `url(${img})` }}
      className="landingCard"
    >
      <span className="cardName">{name}</span>
    </Link>
  );
};
