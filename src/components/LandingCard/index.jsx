/* eslint-disable react/prop-types */
import "./style.css";
import { Link } from "react-router-dom";

export const LandingCard = ({ title, image, link }) => {
  return (
    <Link
      to={link}
      className="landingPageCard"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h2 className="landingPageCardTitle">{title}</h2>
    </Link>
  );
};
