import React from "react";
import Emty from "./Cart.Emty";
import CartTable from "./Cart.CartTable";
import "../../../style/cart.scss";
import { Button } from "antd";

const Cart = () => {
  const [toggle, setToggle] = React.useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="cart__header">
        <h1 className="cart__header-h1">Shop</h1>
        <h3 className="cart__header-h3">Cart </h3>
      </div>
      <div className="container">{toggle ? <Emty /> : <CartTable />}</div>
      <Button onClick={handleToggle}>change</Button>
    </div>
  );
};
export default Cart;
