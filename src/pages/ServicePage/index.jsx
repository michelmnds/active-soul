/* eslint-disable react/prop-types */
import "./style.css";
import { servicesData } from "../../data/servicesData";
import { ServiceCard } from "../../components/ServiceCard";

export const ServicePage = ({ menu }) => {
  return (
    <div className={`servicePageContainer ${menu ? "move" : ""}`}>
      <div className="serviceBackground">
        <div className="serviceTitleContainer">
          <h2 className="servicePageTitle">Serviços</h2>
        </div>
      </div>

      <main className="servicePageMain">
        {servicesData.map((currentService) => {
          return (
            <ServiceCard
              key={currentService.id}
              id={currentService.id}
              img={currentService.image}
              title={currentService.title}
              description={currentService.description}
            />
          );
        })}
      </main>
    </div>
  );
};
