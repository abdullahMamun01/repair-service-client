import React from "react";
import Footer from "./Footer";
import NavbarMenu from "./NavbarMenu";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <NavbarMenu/>
      {children}
      <Footer/>
    </>
  );
};

export default DefaultLayout;
