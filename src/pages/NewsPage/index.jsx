/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./style.css";
import { newsData } from "../../data/newsData";
import { NewsCard } from "../../components/NewsCard";

export const NewsPage = ({ menu }) => {
  const today = new Date();

  const upcomingEvents = newsData
    .filter((event) => {
      const formatedDate = `${event.schedule[0].day.split("/")[2]}-${
        event.schedule[0].day.split("/")[1]
      }-${event.schedule[0].day.split("/")[0]}`;

      return new Date(formatedDate) > today;
    })
    .sort((a, b) => {
      const dateA = new Date(
        `${b.schedule[0].day.split("/")[2]}-${
          b.schedule[0].day.split("/")[1]
        }-${b.schedule[0].day.split("/")[0]}`
      );

      const dateB = new Date(
        `${a.schedule[0].day.split("/")[2]}-${
          a.schedule[0].day.split("/")[1]
        }-${a.schedule[0].day.split("/")[0]}`
      );

      return dateA - dateB;
    });

  const upcomingEventIds = upcomingEvents.map((event) => event.id);

  return (
    <div className={`newsPageContainer ${menu ? "move" : ""}`}>
      <div className="newsBackground">
        <div className="newsTitleContainer">
          <h2 className="newsPageTitle">Eventos</h2>
        </div>
      </div>

      <main className="newsPageMain">
        <h3 className="newsPageYear">Próximos eventos</h3>
        <section className="newsPageSection">
          {upcomingEvents.length ? (
            upcomingEvents.map((currentNew) => {
              return (
                <NewsCard
                  key={currentNew.id}
                  id={currentNew.id}
                  img={currentNew.image}
                  name={currentNew.name}
                  description={currentNew.description}
                  month={currentNew.schedule[0].day.split("/")[1]}
                  coming={true}
                />
              );
            })
          ) : (
            <span className="newsSpan">Novidades em breve :)</span>
          )}
        </section>

        <h3 className="newsPageYear">2025</h3>
        <section className="newsPageSection">
          {newsData.map((currentNew) => {
            if (
              currentNew.date.split("/")[2] === "2025" &&
              !upcomingEventIds.includes(currentNew.id)
            ) {
              return (
                <NewsCard
                  key={currentNew.id}
                  id={currentNew.id}
                  img={currentNew.image}
                  name={currentNew.name}
                  description={currentNew.description}
                  clickable={currentNew.name !== "Bem me quero - 28 de junho"}
                />
              );
            }
          })}
        </section>
        <h3 className="newsPageYear">2024</h3>
        <section className="newsPageSection">
          {newsData.map((currentNew) => {
            if (
              currentNew.date.split("/")[2] === "2024" &&
              !upcomingEventIds.includes(currentNew.id)
            ) {
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
        <h3 className="newsPageYear">2023</h3>
        <section className="newsPageSection">
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

        <h3 className="newsPageYear">2022</h3>
        <section className="newsPageSection">
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
