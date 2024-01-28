import React from "react";
import About from "./About";
import Hero from "../components/Hero";
import Users from "./Users";
import Services from "./Services";
import Feature from "../components/Feature";
import SpecialCenter from "../components/SpecialCenter";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <Feature/>
      <About />
      <Services />
      <Contact/>
      <SpecialCenter/>
      <Users />
    </>
  );
};

export default Home;
