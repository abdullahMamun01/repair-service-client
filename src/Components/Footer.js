import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
import './../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="common-gap footer-main">
      <Container className="py-4 px-5">
        <Row xs={1} md={4} className="g-5">
          <Col>
            <h2 className="footer-col-title">About</h2>
            <p className="about-describe">
              From our friendly, well-trained staff at each location to a
              dedicated Customer Consultant Team, rest assured your satisfaction
              is our number one priority.
            </p>
          </Col>
          <Col>
            <h2 className="footer-col-title">Pages</h2>
            {/* <Link to="/">About</Link>
          <Link to="/">Home</Link>
          <Link to="/">Login</Link>href
#        <Link to="/">Dashboard</Link> */}
            <ul className="list-style">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Dashboard</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h2 className="footer-col-title">Repair</h2>
            <ul className="list-style">
              <li className="">
                <a href="#">Smartphone</a>
              </li>
              <li>
                <a href="#">Computer</a>
              </li>
              <li>
                <a href="#">Electronic</a>
              </li>
              <li>
                <a href="#">Console</a>
              </li>
              <li>
                <a href="#">Application</a>
              </li>
            </ul>
          </Col>
          <Col>
            <h2 className="footer-col-title">Contact</h2>
            <p className="contact">
              Address: 685 Lane Drive St. California, 33020 Phone: +010 234 7892
              34 E-mail: info@irepair.com
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
