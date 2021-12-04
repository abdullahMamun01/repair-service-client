import React from "react";
import { Card, Col, Row, Button, Container } from "react-bootstrap";
const Services = ({ service }) => {
  const { serviceName, serviceDetails, price, imageUrl, _id } = service;
  return (
    <>
      <Col className="bg-wthite">
        <Card className="border-0 rounded-0 bg-transparent">
          <Card.Img variant="top" className="h-50" src={imageUrl} />
          <Card.Body className="py-5">
            <Card.Title className="service-title text-info">{serviceName}</Card.Title>
            <Card.Text className="text-secondary">{serviceDetails}</Card.Text>
          </Card.Body>
        </Card>
        <div className="p-2 pb-4 text-info ">
          <Button variant="outline-info" className="circle-0">
            Read more
          </Button>
        </div>
      </Col>
    </>
  );
};

export default Services;
