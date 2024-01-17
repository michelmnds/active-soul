/* eslint-disable react/prop-types */
import "./style.css";

// eslint-disable-next-line no-unused-vars
export const DanceCard = ({ img, name, description, modality }) => {
  return (
    <div className="landingCard">
      <div style={{ backgroundImage: `url(${img})` }} className="cardImg" />

      <div className="infoContainer">
        <span className="cardName">{name}</span>
        <span className="cardDesc">{description}</span>
      </div>

      <span className="cardMore">Ver mais &gt;</span>
    </div>
  );
};
