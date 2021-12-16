import React from "react";
import { Row, Col, Container } from "react-bootstrap";
// import { FaRocket, FaRegCalendarCheck, FaUserFriends } from "react-icons/fa";
// import { FiDollarSign } from "react-icons/fi";
import "./../styles/ChooseUs.css";
import Rocket from './../icons/rocket (1).png' ;
import Dollar from './../icons/dollar-symbol.png' ;
import Claneder from './../icons/calendar.png' ;
import User from './../icons/group.png' ;
const choseData = [
  {
    id: 1,
    title: "WE ARE FAST",
    description:
      "Qualified Workers Lorem Ipsum is simply dummy text of the printing",
    img: "https://amigosthemes.com/profix/assets/images/parts/feature-icon.png",
    icon: Rocket
  },
  {
    id: 2,
    title: "NO FIX, NO FEE",
    description:
      "Repair on Demand Lorem Ipsum is simply dummy text of the printing",
    img: "https://amigosthemes.com/profix/assets/images/parts/feature-icon.png",
    icon: Dollar
  },
  {
    id: 3,
    title: "30 DAYS WARRANTY",
    description:
      "Guaranteed Service Lorem Ipsum is simply dummy text of the printing",
    img: "https://amigosthemes.com/profix/assets/images/parts/feature-icon.png",
    icon: Claneder
  },

  {
    id: 4,
    title: "EXPERT STAFF",
    description:
      "Available Anytime Lorem Ipsum is simply dummy text of the printing",
    img: "https://amigosthemes.com/profix/assets/images/parts/feature-icon.png",
    icon: User
  }
];
const ChooseUs = () => {
  return (
    <section className="common-gap">
      <div className="text-center">
        <h1 className="choose-heading">WHY CHOOSE US</h1>
        <p className="text-gray">Some Of Our Features</p>
      </div>
      <Container>
        <Row xs={1} md={4} className="m-auto mt-5 pt-2 g-4">
          {choseData.map((data) => (
            <Col>
              <div className="choose-body">
                <img className="rocket-img" src={data.img} alt="" />
                <img className="icon-image" src={data.icon} alt="" />
                <div className="choose-container">
                  <h1 className="choose-title">{data.title}</h1>
                  <p className="choose-description">{data.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
