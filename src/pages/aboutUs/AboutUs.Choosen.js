import React from "react";
import { Row, Col, Carousel } from "antd";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGlobeAsia,
  faFighterJet,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faGlobeAsia, faFighterJet, faComment);
const Choosen = () => {
  return (
    <div className="aboutus__choosen">
      <div>
        <h1 className="aboutus__choosen-h1">Why Choose Us</h1>
      </div>
      <Row gutter={[24, 24]} className="aboutus__choosen-conten">
        <Col className="aboutus__choosen-conten--pay" lg={{ span: 8 }}>
          <FontAwesomeIcon
            className="aboutus__choosen-conten--pay--icon"
            icon="globe-asia"
          />
          <h3 className="aboutus__choosen-conten--pay--h3">FREE SHIPPING</h3>
          <p className="aboutus__choosen-conten--pay--p">
            Amadea Shop is a very slick and clean e-commerce template with
            endless possibilities.
          </p>
        </Col>
        <Col className="aboutus__choosen-conten--ship" lg={{ span: 8 }}>
          <FontAwesomeIcon
            className="aboutus__choosen-conten--pay--icon"
            icon="fighter-jet"
          />
          <h3 className="aboutus__choosen-conten--pay--h3">FAST DELIVERY</h3>
          <p className="aboutus__choosen-conten--pay--p">
            Amadea Shop is a very slick and clean e-commerce template with
            endless possibilities.
          </p>
        </Col>
        <Col className="aboutus__choosen-conten--customer" lg={{ span: 8 }}>
          <FontAwesomeIcon
            className="aboutus__choosen-conten--pay--icon"
            icon="comment"
          />
          <h3 className="aboutus__choosen-conten--pay--h3">
            CUSTOMERS SUPPORT
          </h3>
          <p className="aboutus__choosen-conten--pay--p">
            Amadea Shop is a very slick and clean e-commerce template with
            endless possibilities.
          </p>
        </Col>
      </Row>
    </div>
  );
};
export default Choosen;
