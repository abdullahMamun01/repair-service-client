import React from "react";
import Banner from "../Components/Banner";
import ChooseUs from "../Components/ChooseUs";
import NavbarMenu from "../Components/NavbarMenu";
import Service from "../Components/Service";
import ServiceList from "../Components/ServiceList";

const Home = () => {
  return (
    <div>
      <NavbarMenu />
      <Banner />
      <ServiceList />
      <ChooseUs />
      <Service/>
    </div>
  );
};

export default Home;
