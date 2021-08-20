import React from "react";
import "../../style/base.scss";
import "../../style/home.scss";
import { Carousel, Row, Col, Button } from "antd";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPaperPlane,
  faDollarSign,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faPaperPlane, faDollarSign, faGlobe);
const Home = () => {
  const contentStyle = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <div className="container">
        <Carousel autoplay effect="fade">
          <Row className="slider__content1">
            <Col className="slider__content1-text" lg={{ span: 12 }}>
              <h1 className="slider__content1-text--h1">
                GREAT OFFERS <br /> ON FRUITS <br /> AND VEGETABLES
              </h1>
              <p className="slider__content1-text--p">
                we supply highly quality, premium organic product
              </p>
              <br />
              <Button id="slider__content1-text--btn">SHOP NOW</Button>
            </Col>
            <Col lg={{ span: 12 }}>
              <img
                className="slider__content1-text--img"
                src="https://template.hasthemes.com/selena/selena/assets/img/slider/slide_1.jpg"
              />
            </Col>
          </Row>
          <Row className="slider__content1">
            <Col className="slider__content1-text" lg={{ span: 12 }}>
              <h1 className="slider__content1-text--h1">
                TASTY HEALTHY <br />
                WE SELL WHAT'S
                <br /> GOOD FOR YOU
              </h1>
              <p className="slider__content1-text--p">
                we supply highly quality, premium organic product
              </p>
              <br />
              <Button id="slider__content1-text--btn">SHOP NOW</Button>
            </Col>
            <Col lg={{ span: 12 }}>
              <img
                className="slider__content1-text--img"
                src="https://template.hasthemes.com/selena/selena/assets/img/slider/slide_2.jpg"
                style={contentStyle}
              />
            </Col>
          </Row>
        </Carousel>
      </div>

      <div className="categories">
        <div className="container">
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
                <p className="shipping__detail-content--p">
                  You can pay online
                </p>
              </div>
            </Col>
          </Row>
          <div className="categories__heading">
            <h1 className="categories__heading-h1">Popular Categories</h1>
          </div>
          <br />
          <Row gutter={16} className="categories-item">
            <Col lg={{ span: 6 }}>
              <div style={{ padding: "8px" }}>
                <div className="categories-item-col green">
                  <div className="categories-item-boder ">
                    <h2 className="categories-item-col--h2">Vegetables</h2>
                    <img
                      className="categories-item-col--img"
                      src="Images/popu/cat-1.png"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 6 }}>
              <div style={{ padding: "8px" }}>
                <div className="categories-item-col orange">
                  <div className="categories-item-boder ">
                    <h2 className="categories-item-col--h2">Fruits</h2>
                    <img
                      className="categories-item-col--img"
                      src="Images/popu/cat-2.png"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 6 }}>
              <div style={{ padding: "8px" }}>
                <div className="categories-item-col blue">
                  <div className="categories-item-boder ">
                    <h2 className="categories-item-col--h2">Juice</h2>
                    <img
                      className="categories-item-col--img"
                      src="Images/popu/cat-3.png"
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={{ span: 6 }}>
              <div style={{ padding: "8px" }}>
                <div className="categories-item-col red">
                  <div className="categories-item-boder ">
                    <h2 className="categories-item-col--h2">Meats</h2>
                    <img
                      className="categories-item-col--img"
                      src="Images/popu/cat-4.png"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div>SOME THING HERE</div>
    </>
  );
};
export default Home;
