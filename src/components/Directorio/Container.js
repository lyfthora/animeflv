import React, { Fragment, useRef, useEffect, useState } from "react";
import cover from "../../img/cover.jpg";

function useOutsideClick(ref, callback, when) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  function handler(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      savedCallback.current();
    }
  }

  useEffect(() => {
    if (when) {
      const timeoutId = setTimeout(() => {
        document.addEventListener("click", handler);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener("click", handler);
      };
    }
  }, [when]);
}

const Container = () => {
  const newObj = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const gnro = [
    "Accion",
    "Aventura",
    "Comedia",
    "Drama",
    "Fantasia",
    "Horror",
    "Romance",
    "Suspenso",
    "Terror",
    "Ecchi",
  ];

  const [gen, setGen] = useState(false);
  const dropdownGen = useRef(null);

  function toggleDropdownGen() {
    setGen((prevState) => !prevState);
    console.log("Dropdown toggle, current state: ", !gen);
  }

  function hideDropdownGen() {
    setGen(false);
    console.log("Dropdown hidden");
  }

  useOutsideClick(dropdownGen, hideDropdownGen, gen);

  return (
    <Fragment>
      <section className="container-principal">
        <div className="container-body margin-container">
          <div className="direction-column">
            <div className="Title-section fa-star">
              <h1>Lista completa de Animes</h1>
            </div>
            <main>
              <form>
                <div className="filters">
                  <span className="multiselect-filter">
                    <div
                      className="btn-multiselect"
                      onClick={toggleDropdownGen}
                    >
                      <span className="multiselect-selected-text">
                        <b>Género: </b>
                        Todos
                      </span>
                      <b className="caret"></b>
                    </div>
                    {gen && (
                      <div
                        className="multiselect-container zoomIn"
                        ref={dropdownGen}
                        style={{ display: "block" }} // Asegurarse de que esté visible
                      >
                        {gnro.map((obj, idx) => (
                          <div key={idx} className="select-checkbox">
                            <input type="checkbox" id={obj} />
                            <label
                              htmlFor={obj}
                              className="filter-select-checkbox"
                            >
                              {obj}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  </span>
                  <button type="submit" className="btn-filter-submit">
                    <i className="fas fa-filter"></i> FILTRAR
                  </button>
                </div>
              </form>
              <ul className="last-animes">
                {newObj.map((obj, idx) => (
                  <li key={idx} style={{ width: "16.66667%" }}>
                    <article className="anime">
                      <span className="estreno">
                        <span>ESTRENO</span>
                      </span>
                      <div className="image fa-play-circle-o">
                        <figure>
                          <img src={cover} alt="cover" />
                        </figure>
                        <span className="type-anime tv">ANIME</span>
                      </div>
                      <h3 className="title-anime">Fumetsu no Anata e</h3>
                    </article>
                  </li>
                ))}
              </ul>
              <div style={{ textAlign: "center" }}>
                <div className="pagination">
                  <a>
                    <i className="fas fa-angle-double-left"></i>
                  </a>
                  <a>1</a>
                  <a>2</a>
                  <a>3</a>
                  <a>
                    <i className="fas fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Container;
