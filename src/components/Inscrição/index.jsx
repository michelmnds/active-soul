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

          {/* <a
            href="https://docs.google.com/forms/d/1qFnl41DsiXtQivAinNQM7OoC4ixqrpUF5nQMGZqzuTs/viewform?edit_requested=true"
            className="inscricaoBtn"
            target="_blank"
          >
            Faz a tua pré-inscrição!
          </a>
          <span className="inscricaoSpan">Ou</span> */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd3rwVbykKhuEzgTdjFIIalCfD5HtnsXXnN2PjsKOarOfzzDg/viewform"
            className="inscricaoBtn"
            target="_blank"
          >
            Renova a tua inscrição!
          </a>
        </div>
      </div>
    </div>
  );
};
