import "./style.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const SideBar = ({ menu }) => {
  return (
    <div className={`sideBarContainer ${menu ? "open" : ""}`}>
      <Link className="navLink" to="/dancas">
        MODALIDADES
      </Link>

      <Link className="navLink" to="/eventos">
        EVENTOS
      </Link>

      <Link className="navLink" to="/equipa">
        EQUIPA
      </Link>

      <Link className="navLink" to="/sobre">
        SOBRE
      </Link>
    </div>
  );
};
