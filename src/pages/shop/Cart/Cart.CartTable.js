import { Button } from "antd";
import React from "react";
import TableRow from "../../../component/commont/TableRow";
import CartForm from "./Cart.CartForm";
const CartTable = () => {
  return (
    <>
      <table className="cart__table">
        <tr className="cart__table-tr">
          <th className="cart__table-tr--th tr--thum">THUMBNAIL</th>
          <th className="cart__table-tr--th tr--product">PRODUCT</th>
          <th className="cart__table-tr--th tr--price">PRICE</th>
          <th className="cart__table-tr--th tr--quantity">QUANTITY</th>
          <th className="cart__table-tr--th tr--total">TOTAL</th>
          <th className="cart__table-tr--th tr--remove">REMOVE</th>
        </tr>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <tr></tr>
      </table>
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
        </div>{" "}
        <div className="cart__total-conten">
          <p> Discount</p>
          <p> -$230</p>
        </div>
        <div className="cart__total-conten">
          <p className="cart__total-conten--total"> Total</p>
          <p className="cart__total-conten--total"> $230</p>
        </div>
        <Button className="cart__total-btn" type="primary">
          <span> PROCEED CHECKOUT</span>{" "}
        </Button>
      </div>
    </>
  );
};
export default CartTable;
