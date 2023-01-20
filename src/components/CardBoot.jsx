import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const CardBoot = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">A button</Button>
      </Card.Body>
    </Card>
  );
};

export default CardBoot;
