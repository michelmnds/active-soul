/* eslint-disable react/prop-types */
import "./style.css";

export const TeamCard = ({ img, name, modality }) => {
  return (
    <div className="teamCardContainer">
      <div
        className="teamCardImage"
        style={{ backgroundImage: `url(${img})` }}
        alt={name}
      />

      <div className="teamCardInfos">
        <span className="teamCardName">{name}</span>
        <span className="teamCardModality">{modality}</span>
      </div>
    </div>
  );
};
