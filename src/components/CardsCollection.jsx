import React from "react";
import CardBoot from "./CardBoot";
import Container from "react-bootstrap/Container";
import "../styles/CardsCollection.css";

const CardsCollection = () => {
  return (
    <Container className="cards-collection">
      <CardBoot />
      <CardBoot />
      <CardBoot />
      <CardBoot />
      <CardBoot />
      <CardBoot />
      <CardBoot />
      <CardBoot />
    </Container>
  );
};

export default CardsCollection;
