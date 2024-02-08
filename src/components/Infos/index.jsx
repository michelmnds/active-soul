import "./style.css";

export const Infos = () => {
  return (
    <div className="moreInfosContainer">
      <section className="topSection">
        <span className="moreInfosMainTxt">Mais informações:</span>

        <hr />

        <div className="moreInfosTime">
          <span className="moreInfosTimeTxt" style={{ marginBottom: 10 }}>
            Contacto: 962 817 248
          </span>
          <span className="moreInfosTimeTxt">Horário:</span>
          <span className="moreInfosDay">Seg à Sex: 08h00 às 22h00</span>
          <span className="moreInfosDay">Sáb: Fechado</span>
          <span className="moreInfosDay">Dom e feriados: Fechado</span>
        </div>
      </section>

      <section className="bottomSection">
        <span className="moreInfosTimeTxt">Morada:</span>
        <div className="mapContainer">
          <div className="mapContainerMarker">
            <span>Active Soul</span>
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Active+Soul/@39.8114818,-7.5070781,15z/data=!4m6!3m5!1s0xd3d5fdba51553b3:0xc09f475931d97c78!8m2!3d39.8114818!4d-7.5070781!16s%2Fg%2F11s5jz_h0w?entry=ttu"
              rel="noreferrer"
            >
              direções
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
