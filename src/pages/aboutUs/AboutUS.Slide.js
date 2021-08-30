import React from "react";
import { Carousel } from "antd";

const Slider = () => {
  return (
    <Carousel autoplay>
      <div className="aboutus__slider">
        <h2 className="aboutus__slider-h2">Testimonial</h2>
        <img
          className="aboutus__slider-img"
          src="Images/slider/team-member-1.jpg"
          alt=""
        />
        <p className="aboutus__slider-p">
          <q>
            {" "}
            Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu
            aliquam eu, luctus vehicula velit. Nam eget tortor ut felis
            fermentum sodales ac eu lacus. Etiam rhoncus congue arcu sed
            interdum. Cras dolor diam,
          </q>
        </p>
        <h4 className="aboutus__slider-h4">Erik Johnson</h4>
      </div>
      <div className="aboutus__slider">
        <h2 className="aboutus__slider-h2">Testimonial</h2>
        <img
          className="aboutus__slider-img"
          src="Images/slider/team-member-2.jpg"
          alt=""
        />
        <p className="aboutus__slider-p">
          <q>
            {" "}
            Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu
            aliquam eu, luctus vehicula velit. Nam eget tortor ut felis
            fermentum sodales ac eu lacus. Etiam rhoncus congue arcu sed
            interdum. Cras dolor diam,
          </q>
        </p>
        <h4 className="aboutus__slider-h4">jhon Doe</h4>
      </div>
      <div className="aboutus__slider">
        <h2 className="aboutus__slider-h2">Testimonial</h2>
        <img
          className="aboutus__slider-img"
          src="Images/slider/team-member-3.jpg"
          alt=""
        />
        <p className="aboutus__slider-p">
          <q>
            {" "}
            Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu
            aliquam eu, luctus vehicula velit. Nam eget tortor ut felis
            fermentum sodales ac eu lacus. Etiam rhoncus congue arcu sed
            interdum. Cras dolor diam,
          </q>
        </p>
        <h4 className="aboutus__slider-h4">ElizaBeth Taylor</h4>
      </div>
    </Carousel>
  );
};
export default Slider;
