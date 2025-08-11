import "./style.css";

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
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEClMI7nUgjAmpD6KhC7c1GLOMQgeX72aMG7K3QHBtcYRMSw/viewform"
            className="inscricaoBtn"
            target="_blank"
          >
            Faz a tua inscrição!
          </a>
        </div>
      </div>
    </div>
  );
};
