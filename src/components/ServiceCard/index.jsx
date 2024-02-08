/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.css";

// eslint-disable-next-line no-unused-vars
export const ServiceCard = ({ id, img, title }) => {
  return (
    <Link
      to={`/servico/${id}`}
      style={{ backgroundImage: `url(${img})` }}
      className="serviceCard"
    >
      <span className="serviceCardName">{title}</span>
    </Link>
  );
};
