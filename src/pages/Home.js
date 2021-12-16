import React from "react";
import Banner from "../Components/Banner";
import ChooseUs from "../Components/ChooseUs";
import Footer from "../Components/Footer";
import NavbarMenu from "../Components/NavbarMenu";
import Service from "../Components/Service";
import ServiceList from "../Components/ServiceList";

const Home = () => {
  return (
    <div>
      <Banner />
      <ServiceList />
      <ChooseUs />
      <Service />
    </div>
  );
};

export default Home;
