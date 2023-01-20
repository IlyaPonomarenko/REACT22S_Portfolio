import React from "react";
import NavBar from "./NavBar";
import "../styles/Home.css";
import CardsCollection from "./CardsCollection";
import Badge from "react-bootstrap/Badge";
import FormBoot from "./FormBoot";

const Home = () => {
  return (
    <div>
      <NavBar />
      <h2 className="title">
        Cards collection <Badge bg="secondary">New</Badge>
      </h2>
      <CardsCollection></CardsCollection>
      <h2 className="title">
        Form <Badge bg="secondary">New</Badge>
      </h2>
      <FormBoot/>
    </div>
  );
};

export default Home;
