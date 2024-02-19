/* eslint-disable react/prop-types */
import "./style.css";

export const Modal = ({ from }) => {
  if (from == "table") {
    return (
      <div className="modalContainer">
        <div className="tableModal">
          <span className="modalClose">X</span>
        </div>
      </div>
    );
  }
};
