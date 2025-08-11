import "./style.css";

// eslint-disable-next-line react/prop-types
export const Inscricao = ({ setInscricao }) => {
  const handleClick = () => {
    setInscricao(false);
  };

  return (
    <div className="inscricaoContainer">
      <div className="inscricaoModal">
        <span className="inscricaoClose" onClick={handleClick}>
          X
        </span>
        <div className="insricaoImage" />
        <div className="inscricaoTextContainer">
          <h1 className="inscricaoH1">
            Entra para esta família que é o Active Soul!
          </h1>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeAlij_icBFuMyuUIyHROt5KUl5uYKhjYxMN1ZXqzgPlfAYtw/viewform?usp=dialog"
            className="inscricaoBtn"
            target="_blank"
            rel="noreferrer"
          >
            Faz a tua inscrição!
          </a>
        </div>
      </div>
    </div>
  );
};
