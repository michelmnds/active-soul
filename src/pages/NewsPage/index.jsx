import "./style.css";
import { newsData } from "../../data/newsData";
import { NewsCard } from "../../components/NewsCard";

export const NewsPage = () => {
  return (
    <div className="newsPageContainer">
      <div className="newsBackground">
        <h2 className="newsPageTitle">Próximos eventos</h2>
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
