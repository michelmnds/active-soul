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
          target="_blank"
          rel="noreferrer"
        />
        <a
          style={{ backgroundImage: "url(https://i.imgur.com/9aJPrO4.png)" }}
          href="https://www.facebook.com/activesoulstudio/"
          className="icon"
          alt="facebook icon"
          target="_blank"
          rel="noreferrer"
        />
        <a
          style={{
            backgroundImage: "url(https://i.imgur.com/n3vYTSB.png)",
          }}
          href="https://www.youtube.com/@studio_activesoul"
          className="icon"
          alt="youtube icon"
          target="_blank"
          rel="noreferrer"
        />
        <a
          style={{
            backgroundImage: "url(https://i.imgur.com/QG4rfWz.png)",
          }}
          href="https://api.whatsapp.com/message/P62IN6OYSZ5YN1?autoload=1&app_absent=0"
          className="icon"
          alt="youtube icon"
          target="_blank"
          rel="noreferrer"
        />
      </div>
    </div>
  );
};
