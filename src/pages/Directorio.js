import React, { Fragment } from "react";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import Container from "../components/Directorio/Container";

const Directorio = () => {
  return (
    <Fragment>
      <div className="wrapper-general">
        <Header />
        <Container />
        <Footer />
      </div>
    </Fragment>
  );
};
export default Directorio;
