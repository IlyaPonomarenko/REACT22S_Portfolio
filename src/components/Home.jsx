import React from "react";
import NavBar from "./NavBar";
import "../styles/Home.css";
import CardsCollection from "./CardsCollection";
import Badge from "react-bootstrap/Badge";
import FormBoot from "./FormBoot";
import ModalBoot from "./ModalBoot";
import Button from "react-bootstrap/esm/Button";

const Home = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <NavBar />
      <h2 className="title">
        Cards collection <Badge bg="secondary">New</Badge>
      </h2>
      <CardsCollection></CardsCollection>
      <h2 className="title">
        Form <Badge bg="secondary">New</Badge>
      </h2>
      <FormBoot />

      <Button variant="primary" className="show-modal" style={{ display: "flex" }} onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>
      <ModalBoot show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Home;
