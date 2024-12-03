/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./style.css";
import { Tabs, rem } from "@mantine/core";
import { IconPhoto, IconHome } from "@tabler/icons-react";

import { Infos } from "../../components/Infos";

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
        <Tabs className="tabsContainer" color="#5e9487" defaultValue="entrada">
          <Tabs.List className="aboutPageNav">
            <Tabs.Tab
              className="aboutNavLink"
              value="entrada"
              leftSection={<IconHome style={iconStyle} />}
            >
              Entrada
            </Tabs.Tab>
            <Tabs.Tab
              className="aboutNavLink"
              value="est1"
              leftSection={<IconPhoto style={iconStyle} />}
            >
              Estúdio 1
            </Tabs.Tab>
            <Tabs.Tab
              className="aboutNavLink"
              value="est2"
              leftSection={<IconPhoto style={iconStyle} />}
            >
              Estúdio 2
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="est1">
            <div
              className="aboutPageMainBackground"
              style={{
                backgroundImage: `url(https://i.imgur.com/fRsT2aI.jpg)`,
              }}
            />
          </Tabs.Panel>

          <Tabs.Panel value="est2">
            <div
              className="aboutPageMainBackground"
              style={{
                backgroundImage: `url(https://i.imgur.com/4WG5oJN.jpg)`,
              }}
            />
          </Tabs.Panel>

          <Tabs.Panel value="entrada">
            <div
              className="aboutPageMainBackground"
              style={{
                backgroundImage: `url(https://i.imgur.com/DM2kTop.jpg)`,
              }}
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

      <Infos />
    </div>
  );
};
