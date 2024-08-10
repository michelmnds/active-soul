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
            Estamos a preparar o novo ano letivo e a equipa Active Soul quer dar
            o melhor aos seus alunos.
          </h1>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe4mR2czkugcnQ1o1EMQFJQjMaD5eFYMyAtK0uBgRPLXH5VLg/viewform"
            className="inscricaoBtn"
            target="_blank"
          >
            Faz a tua pré-inscrição!
          </a>
          <span className="inscricaoSpan">Ou</span>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfEClMI7nUgjAmpD6KhC7c1GLOMQgeX72aMG7K3QHBtcYRMSw/viewform"
            className="inscricaoWhiteBtn"
            target="_blank"
          >
            Faz a tua inscrição!
          </a>
        </div>
      </div>
    </div>
  );
};
