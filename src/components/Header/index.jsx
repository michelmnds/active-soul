/* eslint-disable react/prop-types */
import "./style.css";
import logo from "../../assets/logo-png.png";
import menuIcon from "../../assets/menu.png";
import x from "../../assets/x.png";
import { Link } from "react-router-dom";

export const Header = ({ menu, setMenu }) => {
  const handleClick = () => {
    !menu ? setMenu(true) : setMenu(false);
  };

  return (
    <div className="headerContainer">
      <div className="headerLinkLeft">
        <Link className="headerLink" to="/dancas">
          DANÇA
        </Link>

        <Link className="headerLink" to="/aulas">
          BEM ESTAR
        </Link>

        <Link className="headerLink" to="/equipa">
          EQUIPA
        </Link>
      </div>

      <Link to="/">
        <img className="logoHeader" src={logo} alt="logo" />
      </Link>

      <div className="headerLinkRight">
        <Link className="headerLink" to="/eventos">
          EVENTOS
        </Link>

        <Link className="headerLink" to="/servicos">
          SERVIÇOS
        </Link>

        <Link className="headerLink" to="/sobre">
          SOBRE
        </Link>
      </div>

      <div className="headerIconContainer">
        {menu ? (
          <img
            className="headerIcon"
            src={x}
            alt="x icon"
            onClick={handleClick}
          />
        ) : (
          <img
            className="headerIcon"
            src={menuIcon}
            alt="menu icon"
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
};
