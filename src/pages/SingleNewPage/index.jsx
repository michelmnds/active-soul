/* eslint-disable react-hooks/exhaustive-deps */
import "./style.css";
import { useParams } from "react-router-dom";
import { useRef } from "react";
import { newsData } from "../../data/newsData";
import { useEffect, useState } from "react";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import classes from "./Demo.module.css";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";

// eslint-disable-next-line react/prop-types
export const SingleNewPage = ({ menu }) => {
  const autoplay = useRef(Autoplay({ delay: 3500 }));
  const { currentNewId } = useParams();
  const [currentNew, setCurrentNew] = useState({});
  const [carouselReady, setCarouselReady] = useState(false);

  useEffect(() => {
    setCurrentNew(newsData.find((currentNew) => currentNew.id == currentNewId));
  }, []);

  useEffect(() => {
    if (currentNewId == 25 || currentNewId == 26) {
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

  const imageUrls1 = [
    "https://i.imgur.com/HFKxFRt.jpg",
    "https://i.imgur.com/YqCGKBH.jpg",
    "https://i.imgur.com/4JYgjO1.jpg",
    "https://i.imgur.com/9VQfTf1.jpg",
    "https://i.imgur.com/MH8ogmf.jpg",
  ];
  const imageUrls2 = [
    "https://i.imgur.com/jgoM30V.jpg",
    "https://i.imgur.com/y2nlrRA.jpg",
    "https://i.imgur.com/3j6otcM.jpg",
    "https://i.imgur.com/3XeTnwi.jpg",
    "https://i.imgur.com/wYA4u30.jpg",
    "https://i.imgur.com/Yqi8aet.jpg",
    "https://i.imgur.com/w183qy0.jpg",
    "https://i.imgur.com/XlHuXK8.jpg",
  ];

  function CarouselComponent() {
    const slides =
      currentNewId == 25
        ? imageUrls1.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ))
        : imageUrls2.map((image) => (
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

  if (currentNew.id) {
    const formattedDescription = currentNew.description.replace(
      // eslint-disable-next-line no-useless-escape
      /[\.\!\*\$\|]/g,
      (match) => {
        if (match === ".") {
          return ".<br />";
        } else if (match === "!") {
          return "!<br />";
        } else if (match === "*") {
          return ".";
        } else if (match === "$") {
          return "<br />";
        } else if (match === "|") {
          return "!";
        }
      }
    );

    return (
      <div className={`singleNewContainer ${menu ? "move" : ""}`}>
        <div
          className="singleNewImg"
          style={{ backgroundImage: `url(${currentNew.image})` }}
        />

        <div className="singleNewInfos">
          <h2 className="singleNewName">{currentNew.title}</h2>

          <span
            className="singleNewDesc"
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          ></span>

          {currentNew.link ? (
            currentNew.linkType == "YT" ? (
              <iframe
                className="videoPlayer"
                src={`https://www.youtube.com/embed/${currentNew.link}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : currentNew.linkType == "IG" ? (
              <a
                target="_blank"
                className="instaLink"
                href={currentNew.link}
                rel="noreferrer"
              >
                Veja no Instagram
              </a>
            ) : currentNew.linkType == "FBDesktop" ? (
              <iframe
                className="videoPlayer"
                src={`https://www.facebook.com/plugins/post.php?href=${currentNew.link}`}
                title="Facebook video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : currentNew.linkType == "FBMobile" ? (
              <iframe
                className="videoPlayer fb"
                src={`https://www.facebook.com/plugins/post.php?href=${currentNew.link}`}
                title="Facebook video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              false
            )
          ) : null}

          <span className="singleNewText">Agenda: </span>

          <section className="newsSchedule">
            {currentNew.schedule.map((currentNew) => {
              return (
                <div key={currentNew.day} className="newContainer">
                  <span className="newDay">{currentNew.day}</span>
                  <span className="newTime">{currentNew.time}</span>
                  <span className="newLocation">{currentNew.location}</span>
                </div>
              );
            })}
          </section>

          {currentNewId == 25 || currentNewId == 26 ? (
            <CarouselComponent />
          ) : null}

          <a
            href="https://wa.me/message/P62IN6OYSZ5YN1"
            className="singleNewBtn"
            target="_blank"
            rel="noreferrer"
          >
            CONTACTE-NOS
          </a>
        </div>
      </div>
    );
  }
};
