import React from "react";
import WishListTable from "./WishList.Table";
import "../../../style/wishlist.scss";
import { Button } from "antd";

const WishList = () => {
  return (
    <div>
      <div className="wishlist__header">
        <h1 className="wishlist__header-h1">Shop</h1>
        <h3 className="wishlist__header-h3">WishList </h3>
      </div>
      <div className="container">
        <WishListTable />
      </div>
    </div>
  );
};
export default WishList;
