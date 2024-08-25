import React, { Fragment } from "react";
import Logo from "../../../img/logo.webp";

const Header = () => {
  return (
    <Fragment>
      <header>
        <nav className="menu">
          <div className="navbar-nav">
            <div className="logo">
              <a>
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <div className="navegation">
              <div className="nav-options">
                <ul className="menu-navegation">
                  <li>
                    <a href="">INICIO</a>
                  </li>
                  <li>
                    <a href="">DIRECTORIO ANIME</a>
                  </li>
                </ul>
                <div className="search">
                  <form action="" autocomplete="off">
                    <input type="text" name="q" placeholder="Buscar..." />
                    <button>
                      <i className="fas fa-search"></i>
                    </button>
                  </form>
                </div>
                <div className="login-button">
                  <input type="checkbox" id="dpwn-login" />
                  <label for="dpwn-login" className="buttonDpwn-login">
                    <span className="fa-user">LOGIN</span>
                  </label>
                </div>
                <ul className="socialFb">
                  <li>
                    <a href="" className="fa-facebook-f"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
