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
              href="https://www.google.com/maps/place/Estr.+do+Montalv%C3%A3o+31a,+6000-050+Castelo+Branco/@39.8108481,-7.5080727,3a,75y,115.99h,77.66t/data=!3m8!1e1!3m6!1stBbubK5REIsMt42KHiXOXA!2e0!5s20250501T000000!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D12.341252336759354%26panoid%3DtBbubK5REIsMt42KHiXOXA%26yaw%3D115.98986889677224!7i16384!8i8192!4m15!1m8!3m7!1s0xd3d5ea351aa6a11:0xc9567423756f88b4!2sEstr.+do+Montalv%C3%A3o+31a,+6000-050+Castelo+Branco!3b1!8m2!3d39.810681!4d-7.5079257!16s%2Fg%2F11tp0_0910!3m5!1s0xd3d5ea351aa6a11:0xc9567423756f88b4!8m2!3d39.810681!4d-7.5079257!16s%2Fg%2F11tp0_0910?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D"
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
