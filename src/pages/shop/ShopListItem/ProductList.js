/** @format */

import React from "react";
import Modal from "../../../component/Modal/Modal";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Rate, Button } from "antd";
import { HeartOutlined } from "@ant-design/icons";

import {
  addToCart,
  addToWishlist,
  addToDetail,
} from "../../../redux/reducers/productSlice";

import "./productList.scss";
import { useDispatch } from "react-redux";

const ProductList = (props) => {
  const [isShowCart, setIsShowCart] = React.useState(true);
  const [isShowWishlist, setisShowWishlist] = React.useState(true);
  const { id, name, img, price, stock, description,rating } = props;
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(
      addToCart({ id, img, name, price, stock, total: price, count: 1 })
    );
    setIsShowCart(false);
  };
  const handleAddWishlist = () => {
    dispatch(addToWishlist({ id, img, name, price, stock }));
    setisShowWishlist(false);
  };
  const handleIsShow = () => {
    setIsShowCart(true);
  };
  const handleIsShowWishlist = () => {
    setisShowWishlist(true);
  };
  return (
    <div className="product-list">
      <Row>
        <Col lg={{ span: 6 }} xs={{ span: 24 }} className="img">
          <img src={img} />
        </Col>
        <Col lg={{ span: 18 }} xs={{ span: 24 }}>
          <div className="content">
           <Rate value={rating} />
            <h2>{props.name}</h2>
            <h3>$ {price}.00</h3>
            <p>{description}</p>
            <Button size="large" className="add" onClick={handleAddCart}>
              ADD TO CART
            </Button>

            <Button className="icon" size="large" onClick={handleAddWishlist}>
              <HeartOutlined />
            </Button>
          </div>
        </Col>
      </Row>
      <div
        className="modal"
        onClick={handleIsShow}
        style={{ display: isShowCart ? "none" : "flex" }}
      >
        <Modal name="Add to cart suscces" />
      </div>
      <div
        className="modal"
        onClick={handleIsShowWishlist}
        style={{ display: isShowWishlist ? "none" : "flex" }}
      >
        <Modal name="Add to wishlist suscces" />
      </div>
    </div>
  );
};

export default ProductList;
