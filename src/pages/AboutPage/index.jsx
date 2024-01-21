/* eslint-disable react/prop-types */
import "./style.css";

export const AboutPage = ({ menu }) => {
  return (
    <div className={`aboutPageContainer ${menu ? "move" : ""}`}>
      <div className="aboutBackground">
        <div className="aboutTitleContainer">
          <h2 className="aboutPageTitle">Nossa história</h2>
        </div>
      </div>

      <main className="aboutPageMain">
        <div className="aboutPageMainBackground" />

        <div className="aboutTextContainer">
          <span className="aboutPageText">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
            blanditiis aliquam alias corporis voluptatem, voluptate illum,
            nesciunt veritatis eum aspernatur deleniti rem dolores recusandae
            laborum, odio soluta et unde debitis?
          </span>
        </div>
      </main>
    </div>
  );
};
