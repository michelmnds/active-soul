/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./style.css";

// eslint-disable-next-line no-unused-vars

export const NewsCard = ({
  id,
  img,
  name,
  coming,
  month,
  clickable = true,
}) => {
  const monthNames = {
    "01": "Janeiro",
    "02": "Fevereiro",
    "03": "Março",
    "04": "Abril",
    "05": "Maio",
    "06": "Junho",
    "07": "Julho",
    "08": "Agosto",
    "09": "Setembro",
    10: "Outubro",
    11: "Novembro",
    12: "Dezembro",
  };

  if (coming) {
    if (clickable) {
      return (
        <Link
          to={`/evento/${id}`}
          style={{ backgroundImage: `url(${img})` }}
          className="newsCard"
        >
          {name && <span className="newsCardName"> {name} </span>}

          <section className="monthContainer">
            <span className="monthTxt">{monthNames[month]}</span>
          </section>
        </Link>
      );
    }
    return (
      <div
        to={`/evento/${id}`}
        style={{ backgroundImage: `url(${img})` }}
        className="newsCard"
      >
        {name && <span className="newsCardName"> {name} </span>}

        <section className="monthContainer">
          <span className="monthTxt">{monthNames[month]}</span>
        </section>
      </div>
    );
  } else {
    if (clickable) {
      return (
        <Link
          to={`/evento/${id}`}
          style={{ backgroundImage: `url(${img})` }}
          className="newsCard"
        >
          {name && <span className="newsCardName"> {name} </span>}
        </Link>
      );
    }
    return (
      <div
        to={`/evento/${id}`}
        style={{ backgroundImage: `url(${img})` }}
        className="newsCard"
      >
        {name && <span className="newsCardName"> {name} </span>}
      </div>
    );
  }
};
