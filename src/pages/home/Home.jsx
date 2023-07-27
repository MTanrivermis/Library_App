import React from "react";
import { CardContainer, HomeContainer, HomeImage } from "./Home.style";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <HomeImage></HomeImage>
      <CardContainer>
        <Card />
      </CardContainer>
    </HomeContainer>
  );
};

export default Home;
