/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./style.css";
import { Tabs, rem } from "@mantine/core";
import { IconPhoto } from "@tabler/icons-react";
import {
  FaTheaterMasks,
  FaHome,
  FaCalendarAlt,
  FaUsers,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { TbMoodKid } from "react-icons/tb";
import { Infos } from "../../components/Infos";
import { OpinionCard } from "./components/OpinionCard";

const isMobile = window.innerWidth < 768;

const opinions = [
  {
    rating: 5,
    name: "Inês Pitacas",
    text: "Equipa de profissionais de excelência. Flexibilidade de horários de treino com PT, de manhã até ao final do dia. 💪🍀💪💪Muito sucesso, sempre!",
  },
  {
    rating: 5,
    name: "Isabel Carreira",
    text: "Não podia ter escolhido melhor sítio para voltar ao exercício físico. Pelo profissionalismo e simpatia de todos, já lá vão três anos a sentir-me em casa 💪🙌",
  },
  {
    rating: 5,
    name: "Selma Esteves",
    text: "Gosto muito de treinar na active soul, tem professoras fantasticas, dedicadas, divertidas sempre com boa disposição que nos motivam durante as aulas.",
  },
  {
    rating: 5,
    name: "Leonor Miguel Farias",
    text: "Um estúdio único e cheio de energia! Um local muito acolhedor e muito bom para praticar vários estilos de dança! Recomendo🫶🏼",
  },
  {
    rating: 5,
    name: "Patricia Marques",
    text: "Conseguimos juntar teatro músical à dança e os resultados estão a ser incríveis. Profissionalismo e simpatia.",
  },
  {
    rating: 5,
    name: "Julia Senna",
    text: "Um ótimo lugar, super familiar, todos lá nos recebem com muita simpatia!",
  },
];

export const AboutPage = ({ menu }) => {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <div className={`aboutPageContainer ${menu ? "move" : ""}`}>
      <div className="aboutBackground">
        <div className="aboutTitleContainer">
          <h2 className="aboutPageTitle">Nossa história</h2>
        </div>
      </div>

      <main className="aboutPageMain">
        <Tabs
          className="tabsContainer"
          color="#5e9487"
          defaultValue="est2"
          variant="pills"
          radius="md"
        >
          <Tabs.List className="aboutPageNav">
            <Tabs.Tab
              className="aboutNavLink"
              value="est2"
              leftSection={<IconPhoto style={iconStyle} />}
            >
              Estúdio 2
            </Tabs.Tab>
            <Tabs.Tab
              className="aboutNavLink"
              value="est3"
              leftSection={<IconPhoto style={iconStyle} />}
            >
              Estúdio 3
            </Tabs.Tab>
            <Tabs.Tab
              className="aboutNavLink"
              value="salaPolivalente"
              leftSection={<FaTheaterMasks style={iconStyle} />}
            >
              Sala Polivalente
            </Tabs.Tab>
            <Tabs.Tab
              className="aboutNavLink"
              value="salaBrincadeiras"
              leftSection={<TbMoodKid style={iconStyle} />}
            >
              Sala das Brincadeiras
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="est2">
            <div
              className="aboutPageMainBackground"
              style={{ backgroundImage: `url(https://imgur.com/wRObaTQ.jpg)` }}
            />
          </Tabs.Panel>

          <Tabs.Panel value="est3">
            <div
              className="aboutPageMainBackground"
              style={{ backgroundImage: `url(https://imgur.com/Hrv1wXI.jpg)` }}
            />
          </Tabs.Panel>

          <Tabs.Panel value="salaPolivalente">
            <div
              className="aboutPageMainBackground"
              style={{ backgroundImage: `url(https://imgur.com/3zh9r0V.jpg)` }}
            />
          </Tabs.Panel>

          <Tabs.Panel value="salaBrincadeiras">
            <div
              className="aboutPageMainBackground"
              style={{ backgroundImage: `url(https://imgur.com/dsmtorp.jpg)` }}
            />
          </Tabs.Panel>
        </Tabs>

        <div className="aboutTextContainer">
          <span className="aboutPageText">
            O Active Soul surge em Castelo Branco em 2022, um espaço onde se
            pretende potenciar a cultura e o exercício. Um espaço repleto de
            musicalidade e ritmo que complementa o bem estar físico,
            performances / espetáculos e a organização de eventos. Destacando-se
            com uma grande oferta de serviços, vários estilos de dança,
            diferentes atividades, aulas de grupo e personalizadas. Ao longo
            destes anos sentimos a necessidade de fazer mais e melhor
            disponibilizando assim à cidade um espaço de excelência. Todos os
            caminhos vão dar ao Active Soul!
          </span>
        </div>
      </main>

      {/* ---------------------- Serviços ---------------------- */}
      <section className="servicesSection">
        <h2 className="servicesTitle">SERVIÇOS</h2>

        <div className="servicesGrid">
          <article className="serviceItem">
            <div className="serviceIconWrap">
              <FaHome className="serviceIcon" aria-hidden />
            </div>
            <h3 className="serviceHeading">ALUGUER DE ESPAÇO</h3>
            <p className="serviceDesc">
              Aluguer de espaço para aulas privadas, aulas de grupo, ensaios
              privados e de grupo, para trabalhos comerciais.
            </p>
          </article>

          <article className="serviceItem">
            <div className="serviceIconWrap">
              <FaCalendarAlt className="serviceIcon" aria-hidden />
            </div>
            <h3 className="serviceHeading">EVENTOS</h3>
            <p className="serviceDesc">
              Alugue o espaço para festas de aniversário e workshops.
            </p>
          </article>

          <article className="serviceItem">
            <div className="serviceIconWrap">
              <FaUsers className="serviceIcon" aria-hidden />
            </div>
            <h3 className="serviceHeading">FORMAÇÕES</h3>
            <p className="serviceDesc">
              Team buildings, formações corporativas, etc.
            </p>
          </article>
        </div>
      </section>
      {/* -------------------- /Serviços ----------------------- */}

      <div className="opinionsContainer">
        <h1 className="moreInfosMainTxt">Opiniões:</h1>
        <div className="opinionsCardContainer">
          {(isMobile ? opinions.slice(0, 3) : opinions).map((opinion, key) => (
            <OpinionCard {...opinion} key={key} />
          ))}
        </div>
      </div>

      <Infos />
    </div>
  );
};
