import { Link } from "react-router-dom";
import "./style.css";

// eslint-disable-next-line react/prop-types
export const NewsCard = ({ id, img, name, description }) => {
  return (
    <div className="newsCard">
      <div style={{ backgroundImage: `url(${img})` }} className="newsCardImg" />

      <div className="newsInfoContainer">
        <span className="newsCardName">{name}</span>
        <span className="newsCardDesc">{description}</span>
        <Link to={`/evento/${id}`} className="newsCardMore">
          <span>Ver mais</span>
          <span>&gt;</span>
        </Link>
      </div>
    </div>
  );
};
