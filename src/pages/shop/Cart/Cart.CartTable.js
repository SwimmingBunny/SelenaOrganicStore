import { Button } from "antd";
import React from "react";
import TableRow from "../../../component/commont/TableRow.js";
import CartForm from "./Cart.CartForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ROUTE } from "../../../constant/router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { getListProductApi } from "../../../redux/reducers/productSlice.js";

const CartTable = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProductApi())
  }, [])

  const {cart}= useSelector(state => state.listProduct)

  const renderDataCart = ()=>{
    return cart?.map((item,index)=>{
      return (
        <TableRow
          key = {index}
          {...item}
        />
      )
    })
  }



  return (
    <>
      <div className="cart__responsive">
        <table className="cart__table">
          <tr className="cart__table-tr">
            <th className="cart__table-tr--th tr--thum">THUMBNAIL</th>
            <th className="cart__table-tr--th tr--product">PRODUCT</th>
            <th className="cart__table-tr--th tr--price">PRICE</th>
            <th className="cart__table-tr--th tr--quantity">QUANTITY</th>
            <th className="cart__table-tr--th tr--total">TOTAL</th>
            <th className="cart__table-tr--th tr--remove">REMOVE</th>
          </tr>
          {renderDataCart()}
          <tr></tr>
        </table>
      </div>

      <CartForm />
      <div className="cart__total">
        <h2 className="cart__total-h2">Cart Total</h2>
        <div className="cart__total-conten">
          <p> Sub Total</p>
          <p> $230</p>
        </div>
        <div className="cart__total-conten">
          <p> Shipping</p>
          <p> $30</p>
        </div>
        <div className="cart__total-conten">
          <p> Discount</p>
          <p> -$230</p>
        </div>
        <div className="cart__total-conten">
          <p className="cart__total-conten--total"> Total</p>
          <p className="cart__total-conten--total"> $230</p>
        </div>
        <Button className="cart__total-btn" type="primary">
         <NavLink to={ROUTE.CHECKOUT} exact > PROCEED CHECKOUT</NavLink> 
        </Button>
      </div>
    </>
  );
};
export default CartTable;
