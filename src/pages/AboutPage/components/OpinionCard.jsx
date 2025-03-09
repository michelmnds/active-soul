import "./opinion-card-style.css";
import { FaStar } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
export const OpinionCard = ({ rating, name, text }) => {
  return (
    <div className="opinionCard">
      <h1 className="opinionTitle">{name}</h1>
      <div className="opinionCardRatings">
        {[...Array(rating)].map((_, i) => (
          <FaStar key={i} color="#068164" />
        ))}
      </div>
      <span className="opinionText">{text}</span>
    </div>
  );
};
