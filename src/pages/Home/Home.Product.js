import React from "react";
import { Tabs, Button, Row } from "antd";
import ProductItem from "../../component/commont/ProductsItem";
import { CATEGORIES } from "../../constant/router";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
const Product = () => {
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }
  return (
    <div className="container">
      <div className="product__heading">
        <h1 className="product__heading-h1">Our Products</h1>
      </div>
      {/* <div  >
        <ul className="product__item-ul">
          <li className="product__item-ul-li">
            <a className="product__item-ul-li-a" href="" exact>
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
      </div> */}
      <div className="product__item">
        <Tabs
          defaultActiveKey="1"
          onChange={callback}
          className="product__item-list"
        >
          <TabPane tab="Vegetable" key="1">
            <Row gutter={16} className="product__list">
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
              />{" "}
              <ProductItem
                img="Images/product/product-5.jpg"
                name="Spinach"
                price="30$"
              />{" "}
              <ProductItem
                img="Images/product/product-5.jpg"
                name="Spinach"
                price="30$"
              />
              <ProductItem
                img="Images/product/product-5.jpg"
                name="Spinach"
                price="30$"
              />
              <ProductItem
                img="Images/product/product-5.jpg"
                name="Spinach"
                price="30$"
              />
            </Row>
          </TabPane>
          <TabPane tab="Fruits" key="2">
            <Row gutter={16} className="product__list">
              <ProductItem
                img="Images/product/product-1.jpg"
                name="Cherry"
                price="2$"
                sell="5$"
              />
              <ProductItem
                img="Images/product/product-2.jpg"
                name="Pomegranate"
                price="30$"
              />{" "}
              <ProductItem
                img="Images/product/product-3.jpg"
                name="Orange"
                price="30$"
              />{" "}
              <ProductItem
                img="Images/product/product-4.jpg"
                name="Kiwi"
                price="30$"
              />
            </Row>
          </TabPane>
          <TabPane tab="Juice" key="3">
            <Row gutter={16} className="product__list">
              <ProductItem
                img="Images/product/product-7.jpg"
                name="Orange Juice"
                price="2$"
                sell="5$"
              />
              <ProductItem
                img="Images/product/product-8.jpg"
                name="Pomiduru"
                price="30$"
              />{" "}
              <ProductItem
                img="Images/product/product-15.jpg"
                name="Milk"
                price="30$"
                sell="60$"
              />{" "}
            </Row>
          </TabPane>
          <TabPane tab="Meats" key="4">
            <Row gutter={16} className="product__list">
              <ProductItem
                img="Images/product/product-11.jpg"
                name="Beef"
                price="20$"
                sell="58$"
              />
              <ProductItem
                img="Images/product/product-14.jpg"
                name="Chicken"
                price="30$"
              />{" "}
              <ProductItem
                img="Images/product/product-16.jpg"
                name="Salmon"
                price="70$"
              />{" "}
              <ProductItem
                img="Images/product/product-13.jpg"
                name="Fish"
                price="330$"
              />
            </Row>
          </TabPane>
        </Tabs>
      </div>

      <div className="product__button">
        <Button className="product__button-btn">View more</Button>
      </div>
    </div>
  );
};
export default Product;
