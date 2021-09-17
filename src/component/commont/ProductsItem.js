import React from "react";
import QuickView from "./QuickView";
import { Row, Col, Popover, Alert } from "antd";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingBag,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { ROUTE } from "../../constant/router";
library.add(faShoppingBag, faHeart, faStar);

const ProductItem = (props) => {
  const handelDetail = () => {
    return alert("hello my detail!");
  };
  
 const handleAddCart = ()=>{
   Alert("oke!")
 }

  return (
    <>
      {!props.layout ? (
        <Col lg={{ span: 8 }} xs={{ span: 12 }}>
          <div style={{ padding: "2.4rem .8rem " }}>
            <div className="product__list-item">
              <div className="product__list-item--img">
                <img style={{width:'100%'}} src={props.img} alt="" />
              </div>
              <div className="product__list-item--rating">
                <span>
                  <FontAwesomeIcon
                    icon="star"
                    // className="product__list-item--rating"
                  />
                </span>
                <span>
                  <FontAwesomeIcon icon="star" />
                </span>
                <span>
                  <FontAwesomeIcon icon="star" />
                </span>
                <span>
                  <FontAwesomeIcon icon="star" />
                </span>
                <span>
                  <FontAwesomeIcon icon="star" />
                </span>
              </div>
              <NavLink className="product__list-item--h3" to={ROUTE.SHOPDETAIL}>
                {props.name}
              </NavLink>
              <div className="product__list-item--price">
                <p className="product__list-item--price--p">${props.price} </p>
                <p className="product__list-item--price--p discounted">
                  {props.sell}
                </p>
              </div>
              <div className="product__list-item--icon">
                <Popover content="Add to cart">
                  <div className="product__list-item--icon-1">
                    <FontAwesomeIcon
                      className="product__list-item--icon--1"
                      icon="shopping-bag"
                    />
                  </div>
                </Popover>
                <Popover content=" Wishlist">
                  <div className="product__list-item--icon-2">
                    <FontAwesomeIcon
                      className="product__list-item--icon--1"
                      icon="heart"
                    />
                  </div>
                </Popover>
              </div>
              <QuickView />
            </div>
          </div>
        </Col>
      ) : (
        <Col lg={{ span: 8 }} xs={{ span: 24 }}>
          <div style={{ padding: "2.4rem .8rem " }}>
            <div className="product__list-item">
              <div className="product__list-item--img">
                <img width="100%" src={props.img} alt="" />
              </div>
              <div className="product__list-item--rating">
                <span>
                  <FontAwesomeIcon
                    icon="star"
                    // className="product__list-item--rating"
                  />
                </span>
                <span>
                  <FontAwesomeIcon icon="star" />
                </span>
                <span>
                  <FontAwesomeIcon icon="star" />
                </span>
                <span>
                  <FontAwesomeIcon icon="star" />
                </span>
                <span>
                  <FontAwesomeIcon icon="star" />
                </span>
              </div>
              <NavLink className="product__list-item--h3" to={ROUTE.SHOPDETAIL}>
                {props.name}
              </NavLink>
              <div className="product__list-item--price">
                <p className="product__list-item--price--p">{props.price} </p>
                <p className="product__list-item--price--p discounted">
                  {props.sell}
                </p>
              </div>
              <div className="product__list-item--icon">
                <Popover content="Add to cart">
                  <div className="product__list-item--icon-1">
                    <FontAwesomeIcon
                      className="product__list-item--icon--1"
                      icon="shopping-bag"
                    />
                  </div>
                </Popover>
                <Popover content=" Wishlist">
                  <div className="product__list-item--icon-2">
                    <FontAwesomeIcon
                      className="product__list-item--icon--1"
                      icon="heart"
                    />
                  </div>
                </Popover>
              </div>

              <QuickView />
            </div>
          </div>
        </Col>
      )}
    </>
  );
};
export default ProductItem;
