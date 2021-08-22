import React from "react";
import "../../style/base.scss";
import "../../style/home.scss";
import Slider from "./Home.Slider";
import Shipping from "./Home.Shipping";
import Categories from "./Home.Categories";
//
const Home = () => {
  return (
    <>
      <Slider />
      {/* Categories & Shipping */}
      <div className="categories">
        <div className="container">
          <Shipping />
          <Categories />
        </div>
      </div>
      <div>SOME THING HERE</div>
    </>
  );
};
export default Home;
