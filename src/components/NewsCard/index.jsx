import "./style.css";

// eslint-disable-next-line react/prop-types
export const NewsCard = ({ img, name, description, date }) => {
  return (
    <div className="newsCard">
      <div style={{ backgroundImage: `url(${img})` }} className="cardImg" />

      <div className="infoContainer">
        <span className="cardName">{name}</span>
        <span className="cardDesc">{description}</span>
        <span className="cardDesc">{date}</span>
      </div>

      <span className="cardMore">Ver mais &gt;</span>
    </div>
  );
};
