/* eslint-disable react/prop-types */
import "./style.css";
import { newsData } from "../../data/newsData";
import { NewsCard } from "../../components/NewsCard";

export const NewsPage = ({ menu }) => {
  return (
    <div className={`newsPageContainer ${menu ? "move" : ""}`}>
      <div className="newsBackground">
        <div className="newsTitleContainer">
          <h2 className="newsPageTitle">Próximos eventos</h2>
        </div>
      </div>

      <main className="newsPageMain">
        <section className="newsPageSection">
          <h3 className="newsPageYear">2024</h3>

          {newsData.map((currentNew) => {
            if (currentNew.date.split("/")[2] == "2024") {
              return (
                <NewsCard
                  key={currentNew.id}
                  id={currentNew.id}
                  img={currentNew.image}
                  name={currentNew.name}
                  description={currentNew.description}
                />
              );
            }
          })}
        </section>

        <section className="newsPageSection">
          <h3 className="newsPageYear">2023</h3>

          {newsData.map((currentNew) => {
            if (currentNew.date.split("/")[2] == "2023") {
              return (
                <NewsCard
                  key={currentNew.id}
                  id={currentNew.id}
                  img={currentNew.image}
                  name={currentNew.name}
                  description={currentNew.description}
                />
              );
            }
          })}
        </section>

        <section className="newsPageSection">
          <h3 className="newsPageYear">2022</h3>

          {newsData.map((currentNew) => {
            if (currentNew.date.split("/")[2] == "2022") {
              return (
                <NewsCard
                  key={currentNew.id}
                  id={currentNew.id}
                  img={currentNew.image}
                  name={currentNew.name}
                  description={currentNew.description}
                />
              );
            }
          })}
        </section>
      </main>
    </div>
  );
};
