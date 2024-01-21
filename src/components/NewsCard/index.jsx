import "./style.css";

// eslint-disable-next-line react/prop-types
export const NewsCard = ({ img, name, description, date }) => {
  return (
    <div className="newsCard">
      <div style={{ backgroundImage: `url(${img})` }} className="newsCardImg" />

      <div className="newsInfoContainer">
        <span className="newsCardName">{name}</span>
        <span className="newsCardDesc">{description}</span>
        <span className="newsCardDesc">{date}</span>
        <span className="newsCardMore">Ver mais &gt;</span>
      </div>
    </div>
  );
};
