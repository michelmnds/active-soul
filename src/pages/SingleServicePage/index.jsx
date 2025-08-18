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
