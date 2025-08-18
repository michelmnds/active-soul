/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useParams } from "react-router-dom";
import { servicesData } from "../../data/servicesData";
import { useEffect, useState } from "react";

import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import classes from "./Demo.module.css";

// eslint-disable-next-line react/prop-types
export const SingleServicePage = ({ menu }) => {
  const autoplay = useRef(Autoplay({ delay: 3500 }));
  const { currentServiceId } = useParams();
  const [currentClass, setCurrentClass] = useState({});
  const [carouselReady, setCarouselReady] = useState(false);
  const [selectedPackId, setSelectedPackId] = useState(null);

  const selectedPack = currentClass?.packs?.find(
    (p) => p.id === selectedPackId
  );

  useEffect(() => {
    setCurrentClass(
      servicesData.find((currentClass) => currentClass.id == currentServiceId)
    );
  }, []);

  useEffect(() => {
    if (currentServiceId == 3) {
      const timeout = setTimeout(() => {
        setCarouselReady(true);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    if (carouselReady) {
      autoplay.current.play();
    }
  }, [carouselReady]);

  const imageUrls = [
    "https://imgur.com/hYIHdMs.png",
    "https://imgur.com/jw3GFps.png",
    "https://imgur.com/QSqI55O.png",
    "https://imgur.com/50s74Ok.png",
  ];

  function CarouselComponent() {
    const slides = imageUrls.map((image) => (
      <Carousel.Slide key={image}>
        <Image style={{ height: `${100}%` }} src={image} />
      </Carousel.Slide>
    ));
    return (
      <Carousel
        classNames={classes}
        className={`${menu ? "move" : ""}`}
        withIndicators
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        nextControlIcon={
          <IconArrowRight
            style={{
              width: `rem(${16})`,
              height: `rem(${16})`,
              backgroundColor: "white",
              borderRadius: 12,
            }}
          />
        }
        previousControlIcon={
          <IconArrowLeft
            style={{
              width: `rem(${16})`,
              height: `rem(${16})`,
              backgroundColor: "white",
              borderRadius: 12,
            }}
          />
        }
      >
        {slides}
      </Carousel>
    );
  }

  useEffect(() => {
    if (currentClass?.packs?.length) {
      setSelectedPackId(currentClass.packs[0].id);
    }
  }, [currentClass]);

  if (currentClass.id && currentServiceId != 3) {
    const formattedDescription = currentClass?.description?.replace(
      // eslint-disable-next-line no-useless-escape
      /[\.\*]/g,
      (match) => {
        if (match === ".") {
          return ".<br />";
        } else if (match === "*") {
          return "<br />";
        }
      }
    );

    return (
      <div className={`singleServiceContainer ${menu ? "move" : ""}`}>
        <div
          className="singleServiceImg"
          style={{ backgroundImage: `url(${currentClass.image})` }}
        />

        <div className="singleServiceInfos">
          <h2 className="singleServiceName">{currentClass.title}</h2>

          {!currentClass.title.includes("Festa de Aniversário") && (
            <span
              className="singleServiceDesc"
              dangerouslySetInnerHTML={{ __html: formattedDescription }}
            ></span>
          )}

          {currentClass.title.includes("Festa de Aniversário") && (
            <>
              <span className="singleServiceDesc">Valores sob Consulta</span>
              <select
                id="packSelect"
                className="packSelect"
                value={selectedPackId ?? ""}
                onChange={(e) => setSelectedPackId(Number(e.target.value))}
                style={{ marginBottom: 12 }}
              >
                {currentClass.packs.map((p) => (
                  <option key={p.id} value={p.id} style={{ cursor: "pointer" }}>
                    {p.name}
                  </option>
                ))}
              </select>

              <ul className="list singleServiceDesc">
                {(selectedPack?.includes ?? []).map((item, idx) => (
                  <li style={{ marginBottom: 8 }} key={idx}>
                    {item}
                  </li>
                ))}
              </ul>
              {selectedPack?.extra && (
                <p className="singleServiceDesc">{selectedPack.extra}</p>
              )}

              <div className="singleServiceDesc" style={{ marginTop: 16 }}>
                <p style={{ marginBottom: 8, marginTop: 16 }}>
                  Opção para todos os packs c/pagamento Extra:
                </p>
                <ul className="list">
                  <li>
                    O lanche proporcionado por nós:
                    <ul className="list" style={{ marginTop: 6 }}>
                      <li style={{ marginBottom: 8 }}>
                        Sandes mistas, só com queijo e só com fiambre;
                      </li>
                      <li style={{ marginBottom: 8 }}>Batata frita;</li>
                      <li style={{ marginBottom: 8 }}>Pipocas;</li>
                      <li style={{ marginBottom: 8 }}>
                        Espetadas de fruta da época;
                      </li>
                      <li style={{ marginBottom: 8 }}>
                        Bebidas: sumos e água;
                      </li>
                      <li style={{ marginBottom: 8 }}>
                        Gelatina em copos individuais.
                      </li>
                    </ul>
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    Máquina de bolhas e luzes para um mini &quot;clube noturno
                    kids&quot;
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    Mascotes, duração 30 minutos
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    Oficina de adereços (para depois usarem na dança)
                  </li>
                  <li style={{ marginBottom: 8 }}>Pinturas faciais</li>
                  <li style={{ marginBottom: 8 }}>
                    Circuito Psicomotor – Apenas Pack Baby
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    Organização de toda a decoração da festa
                  </li>
                </ul>

                <p style={{ marginTop: 16, marginBottom: 8 }}>
                  <strong>Normas para todos os Packs:</strong>
                </p>
                <ul className="list">
                  <li style={{ marginBottom: 8 }}>
                    Podem trazer alimentação, o Active Soul disponibiliza
                    GRATUITAMENTE a loiça e também local para o bolo de
                    aniversário.
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    A decoração de sala fica ao critério dos pais, no entanto
                    disponibilizamos 2 torres de balões e máquina para os
                    encher.
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    Não é permitido a utilização de confetis.
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    Marcação mediante confirmação de disponibilidade e reserva
                    prévia.
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    O pagamento da festa terá de ser feito 50% no dia da
                    marcação e os restantes 50% até ao dia antes da festa de
                    aniversário.
                  </li>
                  <li style={{ marginBottom: 8 }}>
                    Só aceitamos cancelamentos até 15 dias de antecedência do
                    dia da festa, será descontado 15€ para taxas de
                    cancelamento.
                  </li>
                </ul>
              </div>
            </>
          )}

          <a
            href="https://wa.me/message/P62IN6OYSZ5YN1"
            className="singleServiceBtn"
            target="_blank"
            rel="noreferrer"
          >
            CONTACTE-NOS
          </a>
        </div>
      </div>
    );
  } else if (currentClass.id) {
    const formattedDescription = currentClass.description.replace(
      // eslint-disable-next-line no-useless-escape
      /[\.\*]/g,
      (match) => {
        if (match === ".") {
          return ".<br />";
        } else if (match === "*") {
          return "<br />";
        }
      }
    );

    return (
      <>
        <div className={`singleServiceContainer ${menu ? "move" : ""}`}>
          <div
            className="singleServiceImg"
            style={{ backgroundImage: `url(${currentClass.image})` }}
          />

          <div className="singleServiceInfos">
            <h2 className="singleServiceName">{currentClass.title}</h2>

            <span
              className="singleServiceDesc"
              dangerouslySetInnerHTML={{ __html: formattedDescription }}
            ></span>

            <CarouselComponent />
            <a
              href="https://wa.me/message/P62IN6OYSZ5YN1"
              className="singleServiceBtn"
              target="_blank"
              rel="noreferrer"
            >
              CONTACTE-NOS
            </a>
          </div>
        </div>
      </>
    );
  }
};
