/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const SideBar = ({ menu, setMenu }) => {
  const handleNavClick = () => {
    setMenu(true);

    setTimeout(() => {
      setMenu(false);
    }, 10);
  };

  const handleOutsideClick = (e) => {
    if (
      e.target.className !== "sideBarContainer open" &&
      e.target.className !== "headerIcon" &&
      e.target.className !== "navLink"
    ) {
      setMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("scroll", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.removeEventListener("scroll", handleOutsideClick);
    };
  }, []);

  if (menu) {
    document.body.style.overflowX = "hidden";
  } else {
    document.body.style.overflowX = "auto";
  }

  return (
    <>
      <div className={`sideBarContainer ${menu ? "open" : ""}`}>
        <Link
          className={`navLink ${menu ? "" : "white"}`}
          to="/dancas"
          onClick={handleNavClick}
        >
          DANÇAS
        </Link>

        <Link
          className={`navLink ${menu ? "" : "white"}`}
          to="/dancas"
          onClick={handleNavClick}
        >
          BEM ESTAR
        </Link>

        <Link
          className={`navLink ${menu ? "" : "white"}`}
          to="/equipa"
          onClick={handleNavClick}
        >
          EQUIPA
        </Link>

        <Link
          className={`navLink ${menu ? "" : "white"}`}
          to="/eventos"
          onClick={handleNavClick}
        >
          EVENTOS
        </Link>

        <Link
          className={`navLink ${menu ? "" : "white"}`}
          to="/eventos"
          onClick={handleNavClick}
        >
          SERVIÇOS
        </Link>

        <Link
          className={`navLink ${menu ? "" : "white"}`}
          to="/sobre"
          onClick={handleNavClick}
        >
          SOBRE
        </Link>
      </div>
    </>
  );
};
