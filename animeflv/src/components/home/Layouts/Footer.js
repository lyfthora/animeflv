import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container-body">
          <div className="footer-row">
            <div>
              <p>
                <span>Anime Online</span>- Ningún vídeo se encuentra alojado en
                nuestros servidores.
              </p>
              <nav className="terms">
                <a href="#">Términos y Condiciones</a>
                <a href="#">Política de Privacidad</a>
                <a href="#">Sobre AnimeFLV</a>
              </nav>
            </div>
            <ul className="social">
              <li>
                <a
                  href="https://www.facebook.com/armyanime/"
                  target="_blank"
                  className="fa-facebook-f"
                ></a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/c/kudasai"
                  target="_blank"
                  className="fa-youtube"
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
export default Footer;
