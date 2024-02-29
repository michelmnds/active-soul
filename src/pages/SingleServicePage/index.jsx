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

import { newsData } from "../../data/newsData";

// eslint-disable-next-line react/prop-types
export const SingleServicePage = ({ menu }) => {
  const autoplay = useRef(Autoplay({ delay: 3500 }));

  const { currentServiceId } = useParams();
  const [currentClass, setCurrentClass] = useState({});
  useEffect(() => {
    setCurrentClass(
      servicesData.find((currentClass) => currentClass.id == currentServiceId)
    );
  }, []);

  function Demo() {
    const slides = newsData.map((currentNew) => (
      <Carousel.Slide key={currentNew.image}>
        <Image style={{ height: `${100}%` }} src={currentNew.image} />
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

  if (currentClass.id && currentServiceId != 3) {
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

            <Demo />
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
