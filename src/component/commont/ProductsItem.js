/** @format */

import React from "react";
import QuickView from "./QuickView";
import Modal from "../Modal/Modal";

import { Row, Col, Popover, Button } from "antd";
import { Rate } from 'antd';
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingBag,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, useHistory } from "react-router-dom";
import { ROUTE } from "../../constant/router";
import { useDispatch } from "react-redux";
import {
  getListProductApi,
  addToCart,
  addToWishlist,
  addToDetail,
} from "../../redux/reducers/productSlice";

library.add(faShoppingBag, faHeart, faStar);

const ProductItem = (props) => {
  const [isShowCart, setIsShowCart] = React.useState(true);
  const [isShowWishlist, setisShowWishlist] = React.useState(true);
  const { id, name, img, price, stock, description,rating } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddCart = () => {
    dispatch(
      addToCart({ id, img, name, price, stock, total: price, count: 1 })
    );
    setIsShowCart(false);
  };
  const handleIsShow = () => {
    setIsShowCart(true);
  };
  const handleAddWishlist = () => {
    dispatch(addToWishlist({ id, img, name, price, stock }));
    setisShowWishlist(false);
  };
  const handleIsShowWishlist = () => {
    setisShowWishlist(true);
  };
    
  
  
  return (
    <>
      {!props.layout ? (
        <Col lg={{ span: 8 }} xs={{ span: 12 }}>
          <div style={{ padding: "2.4rem .8rem " }}>
            <div className='product__list-item'>
              <div className='product__list-item--img'>
                <img style={{ width: "100%" }} src={props.img} alt='' />
              </div>
              <div className='product__list-item--rating'>
                <span>
                  <Rate allowHalf count={rating} />
                </span>
              </div>
              <NavLink className='product__list-item--h3' to={ROUTE.SHOPDETAIL}>
                {props.name}
              </NavLink>
              <div className='product__list-item--price'>
                <p className='product__list-item--price--p'>
                  ${props.price}.00{" "}
                </p>
                <p className='product__list-item--price--p discounted'>
                  {props.sell}
                </p>
              </div>
              <div className='product__list-item--icon'>
                <Popover content='Add to cart' onClick={handleAddCart}>
                  <div className='product__list-item--icon-1'>
                    <FontAwesomeIcon
                      className='product__list-item--icon--1'
                      icon='shopping-bag'
                    />
                  </div>
                </Popover>
                <Popover content=' Wishlist' onClick={handleAddWishlist}>
                  <div className='product__list-item--icon-2'>
                    <FontAwesomeIcon
                      className='product__list-item--icon--1'
                      icon='heart'
                    />
                  </div>
                </Popover>
              </div>
              <Link className='quickview__eye' to={`${ROUTE.SHOPITEM}/${id}`}>
                <QuickView />
              </Link>
            </div>
          </div>
        </Col>
      ) : (
        <Col lg={{ span: 8 }} xs={{ span: 24 }}>
          <div style={{ padding: "2.4rem .8rem " }}>
            <div className='product__list-item'>
              <div className='product__list-item--img'>
                <img style={{ width: "100%" }} src={props.img} alt='' />
              </div>
              <div className='product__list-item--rating'>
                  <Rate  value={rating} />

              </div>
              <NavLink className='product__list-item--h3' to={ROUTE.SHOPDETAIL}>
                {props.name}
              </NavLink>
              <div className='product__list-item--price'>
                <p className='product__list-item--price--p'>
                  ${props.price}.00{" "}
                </p>
                <p className='product__list-item--price--p discounted'>
                  {props.sell}
                </p>
              </div>
              <div className='product__list-item--icon'>
                <Popover content='Add to cart' onClick={handleAddCart}>
                  <div className='product__list-item--icon-1'>
                    <FontAwesomeIcon
                      className='product__list-item--icon--1'
                      icon='shopping-bag'
                    />
                  </div>
                </Popover>
                <Popover content=' Wishlist' onClick={handleAddWishlist}>
                  <div className='product__list-item--icon-2'>
                    <FontAwesomeIcon
                      className='product__list-item--icon--1'
                      icon='heart'
                    />
                  </div>
                </Popover>
              </div>
              <Link className='quickview__eye' to={`${ROUTE.SHOPITEM}/${id}`}>
                <QuickView />
              </Link>
            </div>
          </div>
        </Col>
      )}
      <div
        className='modal'
        onClick={handleIsShow}
        style={{ display: isShowCart ? "none" : "flex" }}>
        <Modal name='Add to cart suscces' />
      </div>
      <div
        className='modal'
        onClick={handleIsShowWishlist}
        style={{ display: isShowWishlist ? "none" : "flex" }}>
        <Modal name='Add to wishlist suscces' />
      </div>
    </>
  );
};
export default ProductItem;
