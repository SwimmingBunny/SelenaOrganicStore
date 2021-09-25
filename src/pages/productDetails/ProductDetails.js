/** @format */

import React from "react";
import { useMediaQuery } from "react-responsive";

import {
  Row,
  Col,
  Popover,
  Rate,
  Button,
  Tabs,
  Space,
  Input,
  Form,
} from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import "../../style/ProductDetails.scss";
import "../../style/form.scss";
import "../../style/base.scss";
import ProductItem from "../../component/commont/ProductsItem";
import { NavLink, useParams } from "react-router-dom";
import { ROUTE } from "../../constant/router";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  getListProductApi,
  deleteItemCart,
  editCartItem,
} from "../../redux/reducers/productSlice";
import test from "../../product-10.jpg";

const ProductDetail = (props) => {
  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });
  const [itemDetail, setItemDetail] = React.useState();
  console.log(
    "🚀 ~ file: ProductDetails.js ~ line 37 ~ ProductDetail ~ itemDetail",
    itemDetail
  );
  const dispatch = useDispatch();
  const { listProductApi } = useSelector((state) => state.listProduct);

  const [date, setDate] = React.useState(new Date().getDate());
  const [rate, setRate] = React.useState("");
  const { TabPane } = Tabs;
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [count, setCount] = React.useState(1);
  const [check, setCheck] = React.useState(true);
  const [checkStock, setCheckStock] = React.useState(true);
  const countStyle = {
    minWidth: "3.7rem",
    textAlign: "center",
    transform: "translateY(-.4rem)",
    padding: "0 1rem",
  };
  const btnStyle = {
    border: "none",
  };
  const borderStyle = {
    border: "1px solid #e5e5e5",
    margin: "0 1rem",
    padding: ".5rem 0",
    maxWidth: "10rem",
    display: "flex",
    justifyContent: "space-between",
    maxHeight: "3.4rem",
  };

  let { id } = useParams();
  React.useEffect(() => {
    dispatch(getListProductApi());
  }, []);
  React.useEffect(() => {
    const d = listProductApi.find((item) => item.id === +id); //find e in arr
    setItemDetail(d);
  }, [listProductApi, id]);

  const handleChange = (value) => {
    setRate(value);
  };
  const Plus = () => {
    if (count === 1) {
      setCheck(true);
    }
    setCount(count + 1);
    if (count >= itemDetail?.stock - 1) {
      setCheckStock(false);
      alert("alo");
    } else {
      dispatch(editCartItem({ ...props, count: count + 1 }));
    }
  };
  const Minus = () => {
    if (count === 1) {
      setCheck(!check);
    }
    if (count > 1) {
      setCheck(true);
      setCount(count - 1);
      setCheckStock(true);
      dispatch(editCartItem({ ...props, count: count - 1 }));
    }
  };

  const handleAddCart = () => {
    dispatch(addToCart({ ...itemDetail, total: itemDetail.price, count: 1 }));
    alert("Add cart success!");
  };

  const handleAddWishlist = () => {
    dispatch(addToWishlist({ ...itemDetail }));
    alert("Add to your Wishlist susccess");
  };
  window.scrollTo(0, 20);
  return (
    <div className="container detail">
      <Row className="detail__top">
        <Col lg={{ span: 8 }} className="detail__img">
          <img
            className="detail__img--size"
            src={`http://localhost:3000/${itemDetail?.img}`}
          />
        </Col>
        <Col lg={{ span: 16 }} className="detail__info">
          <div style={{ paddingLeft: "8rem" }}>
            <Rate />
            <h2>{itemDetail?.name}</h2>
            <div></div>
            <h2 className="detail__info--price">$ {itemDetail?.price}.00</h2>
            <p className="detail__info--descrip">{itemDetail?.description}</p>
            <Button
              className="form__btn detail__info--cart"
              size="large"
              onClick={handleAddCart}
            >
              ADD TO CART
            </Button>

            <Button
              className="detail__info--heart"
              size="large"
              onClick={handleAddWishlist}
            >
              <HeartOutlined />
            </Button>
            <div style={{ display: "flex" }}>
              <div style={borderStyle}>
                {check ? (
                  <Button onClick={Minus} size="small" style={btnStyle}>
                    <MinusOutlined />
                  </Button>
                ) : (
                  <Button
                    onClick={Minus}
                    disabled
                    size="small"
                    style={btnStyle}
                  >
                    <MinusOutlined />
                  </Button>
                )}

                <p style={countStyle}>{count}</p>
                {checkStock ? (
                  <Button onClick={Plus} size="small" style={btnStyle}>
                    <PlusOutlined />
                  </Button>
                ) : (
                  <Button onClick={Plus} size="small" disabled style={btnStyle}>
                    <PlusOutlined />
                  </Button>
                )}
              </div>
            </div>

            <p style={{ marginTop: "1rem" }}>
              Availability: {itemDetail?.stock} In Stock
            </p>
          </div>
        </Col>
      </Row>
      <Row className="detail__middle">
        <Space style={{ marginBottom: 24 }}></Space>
        <Tabs tabPosition={isMoblie ? "top" : "left"}>
          <TabPane tab="Description" key="1" className="detail__middle--boder">
            <p className="detail__info--descrip">{itemDetail?.description}</p>
          </TabPane>
          <TabPane
            tab="Reviews"
            key="2"
            className="detail__middle--boder detail__middle__review"
          >
            <h2> 1 Review For Admin</h2>
            <div>
              <div className="detail--flex">
                <img
                  className="detail__middle__review--avt"
                  src="Images/product/product-1.jpg"
                  alt="avatar"
                />
                <div className="detail__middle__review--info">
                  <h3>Admin</h3>
                  <Rate />
                  <p>{date}</p>
                  <p className="detail__info--descrip">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    fringilla augue nec est tristique auctor. Donec non est at
                    libero vulputate rutrum.
                  </p>
                </div>
              </div>
              <div className="detail--flex">
                <img
                  className="detail__middle__review--avt"
                  src="Images/product/product-1.jpg"
                  alt="avatar"
                />
                <div className="detail__middle__review--info">
                  <h3>Admin</h3>
                  <Rate />
                  <p>{date}</p>
                  <p className="detail__info--descrip">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    fringilla augue nec est tristique auctor. Donec non est at
                    libero vulputate rutrum.
                  </p>
                </div>
              </div>
              <div className="detail__middle__review--sb">
                <h3>Comment:</h3>
                <Input
                  className="form__group--input"
                  placeholder="Enter review product..."
                />
                <div className="detail__middle__review--sb--rate">
                  <h3>Rate:</h3>
                  <Rate tooltips={desc} onChange={handleChange} value={rate} />
                  {rate ? (
                    <span className="ant-rate-text"> : {desc[rate - 1]}</span>
                  ) : (
                    ""
                  )}
                </div>

                <br />
                <Button className="form__btn detail__info--cart" size="large">
                  Comment
                </Button>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </Row>
      <Row className="detail__bottom">
        <h1 className="detail__bottom--related">Related Product</h1>
        <div className="detail__bottom--boder"></div>
        <Row gutter={16}>
          <ProductItem
            img="./Images/product/product-10.jpg"
            name="Carrot"
            price="2"
            sell="$5"
          />
          <ProductItem
            img="./Images/product/product-10.jpg"
            name="Carrot"
            price="2"
            sell="$5"
          />
          <ProductItem img={test} name="Carrot" price="2" sell="$5" />
        </Row>
      </Row>
    </div>
  );
};

export default ProductDetail;
