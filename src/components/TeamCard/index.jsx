/* eslint-disable react/prop-types */
import "./style.css";

export const TeamCard = ({ img, name, age, modality }) => {
  return (
    <div className="teamCardContainer">
      <img className="teamCardImage" src={img} alt={name} />

      <div className="teamCardInfos">
        <span className="teamCardName">{name}</span>
        <span className="teamCardAge">{age}</span>
        <span className="teamCardModality">{modality}</span>
      </div>
    </div>
  );
};
