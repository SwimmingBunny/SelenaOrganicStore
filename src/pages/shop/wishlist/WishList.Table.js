import { Button } from "antd";
import React from "react";
import WishListRow from "./WishList.WishListRow";
const WishListTable = () => {
  return (
    <>
      <div className="wishlist__responsive">
        <table className="wishlist__table">
          <tr className="wishlist__table-tr">
            <th className="wishlist__table-tr--th tr--thum">THUMBNAIL</th>
            <th className="wishlist__table-tr--th tr--product">PRODUCT</th>
            <th className="wishlist__table-tr--th tr--price">PRICE</th>
            <th className="wishlist__table-tr--th tr--quantity">
              STOCK STATUS
            </th>
            <th className="wishlist__table-tr--th tr--total">ADD TO CART</th>
            <th className="wishlist__table-tr--th tr--remove">REMOVE</th>
          </tr>
          <WishListRow />
          <tr></tr>
        </table>
      </div>
    </>
  );
};
export default WishListTable;
