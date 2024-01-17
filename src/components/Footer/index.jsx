import "./style.css";
import logo from "../../assets/logo-completa.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <img className="footerLogo" src={logo} alt="logo" />

      <hr className="footerLine" />

      <div className="footerIconContainer">
        <img className="icon" src={instagram} alt="instagram icon" />
        <img className="icon" src={facebook} alt="facebook icon" />
      </div>
    </div>
  );
};
