import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Services from "./Services";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://sheltered-citadel-15796.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <section className="m-3 p-3">
      <h1 className="text-center mb-2 fs-1" style={{lineHeight: '49px' ,}}>Our Service</h1>
      <p className="text-center mb-5" style={{lineHeight: '49px' ,}}>
        We offer a full range of repair services provided by an experienced and
        specialized team
      </p>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <Services service={service}></Services>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
