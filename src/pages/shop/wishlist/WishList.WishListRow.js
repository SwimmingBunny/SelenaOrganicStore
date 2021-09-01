import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrash, faPlus);
const WishListRow = () => {
  const [toggle, setToggle] = React.useState(true);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <tr className="wishlist__table-tr">
      <td className="wishlist__table-tr--td ">
        <img
          className="wishlist__table-tr--td--img"
          src="Images/product/fruits/Apples.jpg"
          alt="img"
        />
      </td>
      <td className="wishlist__table-tr--td">PRODUCT</td>
      <td className="wishlist__table-tr--td">PRICE</td>
      <td className="wishlist__table-tr--td">
        {toggle ? (
          <p className="wishlist__table-tr--td--pblue" onClick={handleToggle}>
            In Stock
          </p>
        ) : (
          <p className="wishlist__table-tr--td--pred" onClick={handleToggle}>
            Stock Out
          </p>
        )}
      </td>
      <td className="wishlist__table-tr--td">
        <p className="wishlist__table-tr--td--ad">Add</p>
      </td>
      <td className="wishlist__table-tr--td">
        <FontAwesomeIcon
          icon="trash"
          className="wishlist__table-tr--td--icon"
        />
      </td>
    </tr>
  );
};
export default WishListRow;
