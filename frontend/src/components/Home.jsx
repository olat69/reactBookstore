import React from "react";
import Banner from "./Banner";
import TopSellers from "./TopSellers";
const Home = () => {
  return (
    <div className="md:ml-10">
      <Banner />
      <TopSellers />
    </div>
  );
};

export default Home;
