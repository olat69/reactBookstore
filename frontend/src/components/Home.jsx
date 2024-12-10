import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
import Recommend from "./Recommend";
const Home = () => {
  return (
    <div className="md:ml-10">
      <Banner />
      <TopSellers />
      <Recommend />
    </div>
  );
};

export default Home;
