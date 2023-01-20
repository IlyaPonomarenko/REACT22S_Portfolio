import React from "react";
import NavBar from "./NavBar";
import "../styles/Home.css"
import CardsCollection from "./CardsCollection"
import Badge from 'react-bootstrap/Badge';

const Home = () => {
  return (
    <div>
      <NavBar/>
      <h2>
        Cards collection <Badge bg="secondary">New</Badge>
      </h2>
      <CardsCollection></CardsCollection>
    </div>
  );
};

export default Home;
