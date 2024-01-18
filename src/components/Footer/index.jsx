import "./style.css";
import logo from "../../assets/logo-completa.png";

export const Footer = () => {
  return (
    <div className="footerContainer">
      <img className="footerLogo" src={logo} alt="logo" />

      <hr className="footerLine" />

      <div className="footerIconContainer">
        <a
          style={{ backgroundImage: "url(https://i.imgur.com/Ia1Q9wE.png)" }}
          href="https://www.instagram.com/activesoul.studio/"
          className="icon"
          alt="instagram icon"
        />
        <a
          style={{ backgroundImage: "url(https://i.imgur.com/9aJPrO4.png)" }}
          href="https://www.facebook.com/activesoulstudio/"
          className="icon"
          alt="facebook icon"
        />
      </div>
    </div>
  );
};
