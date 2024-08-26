import React, { Fragment } from "react";
import Siguenos from "../../img/fb-flv.webp";
import Miniatura from "../../img/miniatura.jpg";
import Miniatura2 from "../../img/miniatura2.jpg";
import Miniatura3 from "../../img/miniatura3.jpg";
import Miniatura4 from "../../img/miniatura4.jpg";
import Miniatura5 from "../../img/miniatura5.jpg";
import Miniatura6 from "../../img/miniatura6.jpg";
import Cover from "../../img/cover.jpg";
import Cover2 from "../../img/cover2.jpg";
import Cover3 from "../../img/cover3.jpg";
import Cover4 from "../../img/cover4.jpg";
import Cover5 from "../../img/cover5.jpg";
import Cover6 from "../../img/cover6.jpg";
import Cover7 from "../../img/cover7.jpg";
import Cover8 from "../../img/cover8.jpg";

const animesEmision = [
  { title: "Naruto Shippuden", type: "ANIME" },
  { title: "One Piece", type: "ANIME" },
  { title: "Attack on Titan", type: "ANIME" },
  { title: "Demon Slayer ", type: "ANIME" },
  { title: "Detective Conan", type: "ANIME" },
  { title: "Shy", type: "ANIME" },
  { title: "Sekai Saikyou no Senki", type: "ANIME" },
  { title: "Sengoku Youko", type: "ANIME" },
  { title: "Noragami", type: "ANIME" },
  { title: "Monster", type: "ANIME" },
  { title: "Serial experiments Lain", type: "ANIME" },
  { title: "Gintama", type: "ANIME" },
  { title: "Doraemon", type: "ANIME" },
  { title: "Made in Abyss", type: "ANIME" },
];

const lastEpisodes = [
  {
    title: "Nomad: Megalo Box 2",
    episode: "Episodio 1",
    thumbnail: Miniatura,
  },
  {
    title: "The Fable",
    episode: "Episodio 2",
    thumbnail: Miniatura2,
  },
  {
    title: "The Fable",
    episode: "Episodio 1",
    thumbnail: Miniatura2,
  },
  {
    title: "Nige Jouzu no Wakagakun",
    episode: "Episodio 2",
    thumbnail: Miniatura3,
  },
  {
    title: "Kami no Tou: Ouji no Hikari",
    episode: "Episodio 7",
    thumbnail: Miniatura4,
  },
  {
    title: "Kami no Tou: Ouji no Hikari",
    episode: "Episodio 6",
    thumbnail: Miniatura4,
  },
  {
    title: "Kami no Tou: Ouji no Hikari",
    episode: "Episodio 5",
    thumbnail: Miniatura4,
  },
  {
    title: "Kami no Tou: Ouji no Hikari",
    episode: "Episodio 4",
    thumbnail: Miniatura4,
  },
  {
    title: "Tsye ti Tsurugi no Wistoria",
    episode: "Episodio 5",
    thumbnail: Miniatura5,
  },
  {
    title: "Tsye ti Tsurugi no Wistoria",
    episode: "Episodio 4",
    thumbnail: Miniatura5,
  },
  {
    title: "Tsye ti Tsurugi no Wistoria",
    episode: "Episodio 3",
    thumbnail: Miniatura5,
  },
  {
    title: "Fairy Tail: Zealot of the Sky",
    episode: "Episodio 2",
    thumbnail: Miniatura6,
  },
];

const lastAnimes = [
  { title: "Fumetsu no Anata e", cover: Cover, type: "ANIME" },
  { title: "Delico's Nursery", cover: Cover2, type: "ANIME" },
  { title: "Kimi ni Todoke 3rd Season", cover: Cover3, type: "ANIME" },
  { title: "Katsute Mahou Shoujo", cover: Cover4, type: "ANIME" },
  { title: "Tensui no Skuna", cover: Cover5, type: "ANIME" },
  { title: "Monogatari Series", cover: Cover6, type: "ANIME" },
  { title: "Isekai Shikkaku", cover: Cover7, type: "ANIME" },
  { title: "Atri: My Dear Moments", cover: Cover8, type: "ANIME" },
];

const Container = () => {
  return (
    <Fragment>
      <section className="container-principal">
        <div className="container-body margin-container">
          <aside className="sidebar MC__fixed">
            <a href="">
              <img src={Siguenos} alt="siguenos" />
            </a>
            <div className="widget-emision">
              <div className="title-emision fa-play">
                <strong>ANIMES EN EMISIÓN</strong>
              </div>
              <div className="animes-emision">
                <ul>
                  {animesEmision.map((anime, idx) => (
                    <li key={idx}>
                      <a href="" className="fa-play-circle">
                        {anime.title}
                        <span className="type-anime tv">{anime.type}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
          <main>
            <div className="title">
              <h2>Últimos episodios</h2>
              <div className="order">
                <a href="" className="active">
                  HOY
                </a>
              </div>
            </div>
            <ul className="last-episodes">
              {lastEpisodes.map((episode, idx) => (
                <li key={idx}>
                  <a href="" className="fa-play">
                    <span className="image-mask">
                      <img src={episode.thumbnail} alt="miniatura" />
                    </span>
                    <span className="nCapi">{episode.episode}</span>
                    <strong className="title-cap-miniatura">
                      {episode.title}
                    </strong>
                  </a>
                </li>
              ))}
            </ul>
            <div className="title fa-star">
              <h2>Últimos Animes</h2>
              <div className="order">
                <a href="" className="active">
                  HOY
                </a>
              </div>
            </div>
            <ul className="last-animes">
              {lastAnimes.map((anime, idx) => (
                <li key={idx}>
                  <article className="anime">
                    <span className="estreno">
                      <span>ESTRENO</span>
                    </span>
                    <div className="image fa-play-circle-o">
                      <figure>
                        <img src={anime.cover} alt="cover" />
                      </figure>
                      <span className="type-anime tv">{anime.type}</span>
                    </div>
                    <h3 className="title-anime">{anime.title}</h3>
                  </article>
                </li>
              ))}
            </ul>
          </main>
        </div>
      </section>
    </Fragment>
  );
};

export default Container;
