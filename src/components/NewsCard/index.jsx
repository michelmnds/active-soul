/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.css";

// eslint-disable-next-line no-unused-vars
export const NewsCard = ({ id, img, name, description }) => {
  return (
    <Link
      to={`/evento/${id}`}
      style={{ backgroundImage: `url(${img})` }}
      className="newsCard"
    >
      <span className="cardName">{name}</span>
    </Link>
  );
};
