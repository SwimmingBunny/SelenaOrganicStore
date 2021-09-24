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
import { useDispatch, useSelector } from "react-redux";
import { addCoupon } from "../../../redux/reducers/couponSlice";
const CartForm = () => {
  const [value, setValue] = React.useState(null);
  const dispatch = useDispatch()

  
  return (
    <Row className="cart__form">
      <Col className="cart__form-col1" lg={{ span: 14 }} xs={{ span: 24 }}>
        <Input
          placeholder="Enter your counpon here"
          required
          className="cart__form-col1--ipu"
          onChange={(e)=>{setValue(e.target.value)}}
          value={value}
        />
        <Button className="cart__form-col1--btn" onClick={()=>{dispatch(addCoupon(value))}}>
          <span>APPLY COUPON</span>
        </Button>
      </Col>
      <Col lg={{ span: 10 }} xs={{ span: 24 }} className="cart__form-col2">
        <NavLink to={ROUTE.SHOPITEM} exact>
          <ScrollToTop />
          <Button className="cart__form-col1--btn">UPDATE CART</Button>
        </NavLink>
      </Col>
    </Row>
  );
};
export default CartForm;
