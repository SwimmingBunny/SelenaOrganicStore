import React from "react";
import ScrollToTop from "../../../component/commont/ScrollToTop";
import { Form, Input, Button, Row, Col } from "antd";
import { ROUTE } from "../../../constant/router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
const CartForm = () => {
  return (
    <Row className="cart__form">
      <Col className="cart__form-col1" lg={{ span: 14 }}>
        <Input
          placeholder="Enter your counpon here"
          required
          className="cart__form-col1--ipu"
        />
        <Button className="cart__form-col1--btn">
          <span>APPLY COUPON</span>
        </Button>
      </Col>
      <Col lg={{ span: 10 }} className="cart__form-col2">
        <NavLink to={ROUTE.SHOPITEM} exact>
          <ScrollToTop />
          <Button className="cart__form-col1--btn">UPDATE CART</Button>
        </NavLink>
      </Col>
    </Row>
  );
};
export default CartForm;
