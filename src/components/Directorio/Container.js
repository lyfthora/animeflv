import React, { Fragment } from "react";
import Cover from "../../img/cover.jpg";
const Container = () => {
  const newObj = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const gnro = [
    "Acción",
    "Aventura",
    "Comedia",
    "Drama",
    "Fantasía",
    "Histórico",
    "Misterio",
    "Romance",
    "Suspense",
    "Terror",
  ];
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
                    <button className="btn-multiselect">
                      <span className="multiselect-selected-text">
                        <b>Genero: </b>
                        Todos
                      </span>
                      <b className="caret"></b>
                    </button>
                    <div className="multiselect-container zoomIn">
                      {gnro.map((obj) => (
                        <div className="select-checkbox">
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
                  </span>
                </div>
              </form>
              <ul className="last-animes">
                {newObj.map((obj, idx) => (
                  <li key={idx}>
                    <article className="anime">
                      <span className="estreno">
                        <span>ESTRENO</span>
                      </span>
                      <div className="image fa-play-circle-o">
                        <figure>
                          <img src={Cover} alt="cover" />
                        </figure>
                        <span className="type-anime tv">ANIME</span>
                      </div>
                      <h3 className="title-anime">Fumetsu no Anata e</h3>
                    </article>
                  </li>
                ))}
              </ul>
            </main>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Container;
