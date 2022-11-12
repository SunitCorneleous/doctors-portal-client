import React from "react";
import Banner from "../Banner/Banner";
import InfoCards from "../InfoCards/InfoCards";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="mx-1 md:mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
    </div>
  );
};

export default Home;
