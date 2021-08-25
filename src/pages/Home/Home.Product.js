import React from "react";
import { Row, Button } from "antd";
import ProductItem from "../../component/commont/ProductsItem";
const Product = () => {
  return (
    <div className="container">
      <div className="product__heading">
        <h1 className="product__heading-h1">Our Products</h1>
      </div>
      <div className="product__item">
        <ul className="product__item-ul">
          <li className="product__item-ul-li">
            <a className="product__item-ul-li-a" href="">
              Vegetable
            </a>
          </li>{" "}
          <li className="product__item-ul-li">
            <a className="product__item-ul-li-a" href="">
              Fruits
            </a>
          </li>{" "}
          <li className="product__item-ul-li">
            <a className="product__item-ul-li-a" href="">
              Juice
            </a>
          </li>{" "}
          <li className="product__item-ul-li">
            <a className="product__item-ul-li-a" href="">
              Meats
            </a>
          </li>
        </ul>
      </div>
      <Row gutter={16} className="product__list">
        <ProductItem
          img="Images/product/product-5.jpg"
          name="Spinach"
          price="30$"
          sell="50$"
        />
        <ProductItem
          img="Images/product/product-10.jpg"
          name="Carrot"
          price="2$"
          sell="5$"
        />
        <ProductItem
          img="Images/product/product-5.jpg"
          name="Spinach"
          price="30$"
          sell="50$"
        />
        <ProductItem
          img="Images/product/product-5.jpg"
          name="Spinach"
          price="30$"
          sell="50$"
        />
        <ProductItem
          img="Images/product/product-10.jpg"
          name="Carrot"
          price="2$"
          sell="5$"
        />
        <ProductItem
          img="Images/product/product-5.jpg"
          name="Spinach"
          price="30$"
          sell="50$"
        />
        <ProductItem
          img="Images/product/product-10.jpg"
          name="Carrot"
          price="2$"
          sell="5$"
        />
        <ProductItem
          img="Images/product/product-5.jpg"
          name="Spinach"
          price="30$"
          sell="50$"
        />
      </Row>
      <div className="product__button">
        <Button className="product__button-btn">View more</Button>
      </div>
    </div>
  );
};
export default Product;
