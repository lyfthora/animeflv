import React, { Fragment } from "react";
import Header from "../home/Layouts/Header";
import Footer from "../home/Layouts/Footer";
import Container from "../home/Container";

const Home = () => {
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
export default Home;
