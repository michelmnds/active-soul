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
        {newsData.map((currentNew) => {
          return (
            <NewsCard
              key={currentNew.id}
              img={currentNew.image}
              name={currentNew.name}
              description={currentNew.description}
            />
          );
        })}
      </main>
    </div>
  );
};
