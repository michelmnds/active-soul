/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.css";

// eslint-disable-next-line no-unused-vars
export const ClassCard = ({ id, img, name, description }) => {
  return (
    <Link
      to={`/aula/${id}`}
      style={{ backgroundImage: `url(${img})` }}
      className="classCard"
    >
      <span className="cardName">{name}</span>
    </Link>
  );
};
