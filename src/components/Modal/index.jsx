/* eslint-disable react/prop-types */
import "./style.css";

export const Modal = ({ from, setTableModal }) => {
  const handleClick = () => {
    setTableModal(false);
  };

  if (from == "table") {
    return (
      <div className="modalContainer">
        <div className="tableModal">
          <span className="modalClose" onClick={handleClick}>
            X
          </span>
        </div>
      </div>
    );
  }
};
