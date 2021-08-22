import React from "react";
import { Row, Col } from "antd";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPaperPlane,
  faDollarSign,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faPaperPlane, faDollarSign, faGlobe);
const Shipping = () => {
  return (
    <Row className="shipping">
      <Col className="shipping__detail" lg={{ span: 8 }}>
        <div className="shipping__detail-plant">
          <FontAwesomeIcon
            className="shipping__detail-plant--icon"
            icon="paper-plane"
          />
        </div>
        <div className="shipping__detail-content">
          <h3 className="shipping__detail-content--h3">FREE SHIPPING</h3>
          <p className="shipping__detail-content--p">
            Free delevery on all orders over $99
          </p>
        </div>
      </Col>{" "}
      <Col className="shipping__detail" lg={{ span: 8 }}>
        <div className="shipping__detail-plant">
          <FontAwesomeIcon
            className="shipping__detail-plant--icon"
            icon="dollar-sign"
          />
        </div>
        <div className="shipping__detail-content">
          <h3 className="shipping__detail-content--h3">SALE</h3>
          <p className="shipping__detail-content--p">
            We have sale items every day
          </p>
        </div>
      </Col>{" "}
      <Col className="shipping__detail" lg={{ span: 8 }}>
        <div className="shipping__detail-plant">
          <FontAwesomeIcon
            className="shipping__detail-plant--icon"
            icon="globe"
          />
        </div>
        <div className="shipping__detail-content">
          <h3 className="shipping__detail-content--h3">PAYMENT</h3>
          <p className="shipping__detail-content--p">You can pay online</p>
        </div>
      </Col>
    </Row>
  );
};
export default Shipping;
