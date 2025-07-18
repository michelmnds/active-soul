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
    if (
      currentNewId == 25 ||
      currentNewId == 26 ||
      currentNewId == 30 ||
      currentNewId == 35 ||
      currentNewId == 37 ||
      currentNewId == 38 ||
      currentNewId == 33
    ) {
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
  const imageUrls3 = [
    "https://i.imgur.com/xFwGF67.jpg",
    "https://i.imgur.com/pfwIebt.jpg",
    "https://i.imgur.com/7QJyLC0.jpg",
    "https://i.imgur.com/q1bumCd.jpg",
    "https://i.imgur.com/oOQKjkz.jpg",
  ];
  const imageUrls4 = [
    "https://i.imgur.com/YGeorqW.jpg",
    "https://i.imgur.com/dTW5fPd.jpg",
    "https://i.imgur.com/T4IZ92I.jpg",
    "https://i.imgur.com/03CiPAW.jpg",
  ];
  const imageUrls5 = [
    "https://i.imgur.com/Ma6fzfU.jpg",
    "https://i.imgur.com/6gp0x2h.jpg",
    "https://i.imgur.com/ZHRDwhB.jpg",
    "https://i.imgur.com/pEMXY2b.jpg",
    "https://i.imgur.com/b05SfcX.jpg",
    "https://i.imgur.com/NYK1lQa.jpg",
    "https://i.imgur.com/CORL1Z1.jpg",
    "https://i.imgur.com/Gzn41Wt.jpg",
    "https://i.imgur.com/k0Fhp3S.jpg",
    "https://i.imgur.com/PZq4hLl.jpg",
    "https://i.imgur.com/HToxRC7.jpg",
    "https://i.imgur.com/NQiHPIv.jpg",
    "https://i.imgur.com/XXWafAP.jpg",
    "https://i.imgur.com/uhFydvZ.jpg",
  ];
  const imageUrls6 = ["https://i.imgur.com/gbCwsMY.jpg"];
  const imageUrls7 = ["https://i.imgur.com/rN3CFXp.jpg"];
  const imageUrls8 = ["https://i.imgur.com/a1hudPx.jpg"];
  const imageUrls9 = ["https://i.imgur.com/t4lO6oZ.jpg"];
  const imageUrls10 = [
    "https://i.imgur.com/SD8HlgT.jpg",
    "https://i.imgur.com/ZcbcK5o.jpg",
    "https://i.imgur.com/QHuAqMS.jpg",
    "https://i.imgur.com/mkEvJJN.jpg",
    "https://i.imgur.com/P8ACu9f.jpg",
  ];
  const imageUrls11 = [
    "https://i.imgur.com/5rgDJmw.jpg",
    "https://i.imgur.com/yqqVEfM.jpg",
    "https://i.imgur.com/sBNsvqL.jpg",
  ];
  const imageUrls12 = ["https://i.imgur.com/ulv5sAG.jpg"];
  const imageUrls13 = [
    "https://i.imgur.com/2blaGoG.jpg",
    "https://i.imgur.com/Xe5JZFA.jpg",
    "https://i.imgur.com/m8TXCGC.jpg",
    "https://i.imgur.com/qmf5mmk.jpg",
  ];
  const imageUrls14 = [
    "https://i.imgur.com/6vSViPz.jpg",
    "https://i.imgur.com/W8bipXb.jpg",
    "https://i.imgur.com/MybaEes.jpg",
    "https://i.imgur.com/8aDinS2.jpg",
  ];
  const imageUrls15 = [
    "https://i.imgur.com/prqny8j.jpg",
    "https://i.imgur.com/TCA1qXU.jpg",
    "https://i.imgur.com/ileYkZY.jpg",
    "https://i.imgur.com/tSywxxj.jpg",
    "https://i.imgur.com/YpzO3wO.jpg",
    "https://i.imgur.com/m55Z4Hw.jpg",
    "https://i.imgur.com/y8QONBA.jpg",
    "https://i.imgur.com/hZvCRxb.jpg",
  ];

  function CarouselComponent() {
    const slides =
      currentNewId == 25
        ? imageUrls1.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ))
        : currentNewId == 26
        ? imageUrls2.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ))
        : currentNewId == 35
        ? imageUrls4.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ))
        : currentNewId == 37
        ? imageUrls5.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ))
        : currentNewId == 33
        ? imageUrls6.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ))
        : currentNewId == 36
        ? imageUrls7.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ))
        : currentNewId == 31
        ? imageUrls8.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ))
        : currentNewId == 38
        ? imageUrls9.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ))
        : currentNewId == 40
        ? imageUrls10.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ))
        : currentNewId == 41
        ? imageUrls11.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ))
        : currentNewId == 42
        ? imageUrls12.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ))
        : currentNewId == 43
        ? imageUrls13.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ))
        : currentNewId == 46
        ? imageUrls14.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ))
        : currentNewId == 50
        ? imageUrls15.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ))
        : imageUrls3.map((image) => (
            <Carousel.Slide key={image}>
              <Image style={{ height: `${100}%` }} src={image} />
            </Carousel.Slide>
          ));
    return (
      <Carousel
        classNames={classes}
        className={`${menu ? "move" : ""}`}
        loop
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        nextControlIcon={
          currentNewId == 36 ||
          currentNewId == 31 ||
          currentNewId == 38 ||
          currentNewId == 42 ||
          currentNewId == 48 ||
          currentNewId == 33 ? null : (
            <IconArrowRight
              style={{
                width: `rem(${16})`,
                height: `rem(${16})`,
                backgroundColor: "white",
                borderRadius: 12,
              }}
            />
          )
        }
        previousControlIcon={
          currentNewId == 36 ||
          currentNewId == 31 ||
          currentNewId == 38 ||
          currentNewId == 42 ||
          currentNewId == 48 ||
          currentNewId == 33 ? null : (
            <IconArrowLeft
              style={{
                width: `rem(${16})`,
                height: `rem(${16})`,
                backgroundColor: "white",
                borderRadius: 12,
              }}
            />
          )
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

          {currentNew.id === 48 && (
            <span className="singleNewDesc">
              Faça a sua inscrição{" "}
              <a
                target="_blank"
                href="https://forms.gle/y6RNg1hgaZvAuLrMA"
                rel="noreferrer"
              >
                aqui
              </a>
              !
            </span>
          )}
          {currentNew.id === 31 && (
            <span className="singleNewDesc">
              Faça a sua inscrição{" "}
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeNEipOHE97kcnXdYoegAOV9P1z0b9Q6dQR3ECR2l4TjQ-gRw/viewform?fbclid=IwZXh0bgNhZW0CMTAAAR0fXaDKvTcZgqGUOHb7HXoHwYNcikRJXLU_QR0-gPWdkEvaYslN5taTo30_aem_AUIchQRoMc3AfHjDbyZfYZq_7dcirWvlU3BZitZWy4YH03NrnqvISIBFv8yOliHv2dqOVKhREeKEBT8OV3BvqBKA"
                rel="noreferrer"
              >
                aqui
              </a>
              !
            </span>
          )}
          {(currentNew.id === 34 ||
            currentNew.id === 51 ||
            currentNew.id === 58) && (
            <span className="singleNewDesc">
              Veja as fotos{" "}
              <a
                target="_blank"
                href={
                  currentNew.id === 34
                    ? "https://mega.nz/folder/1u1QQACD#4FvfQITQ2U-xgyXuMtcfdQ"
                    : currentNew.id === 51
                    ? "https://mega.nz/folder/gn8AXJbT#btq0tig8jZKjBg-gU-LmBg"
                    : currentNew.id === 58
                    ? "https://mega.nz/folder/Vn8jjRTC#pXEYLsniZJu2JbicF-Kp5w/folder/E6tlzKIL"
                    : null
                }
                rel="noreferrer"
              >
                aqui
              </a>
              !
            </span>
          )}

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

          {currentNewId == 25 ||
          currentNewId == 26 ||
          currentNewId == 30 ||
          currentNewId == 35 ||
          currentNewId == 33 ||
          currentNewId == 36 ||
          currentNewId == 37 ||
          currentNewId == 38 ||
          currentNewId == 40 ||
          currentNewId == 41 ||
          currentNewId == 42 ||
          currentNewId == 43 ||
          currentNewId == 46 ||
          currentNewId == 50 ||
          currentNewId == 31 ? (
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
