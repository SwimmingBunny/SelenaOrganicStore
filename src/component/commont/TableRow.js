import React from "react";
import Count from "./Count";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faTrash);
const TableRow = () => {
  return (
    <tr className="cart__table-tr">
      <td className="cart__table-tr--td ">
        <img
          className="cart__table-tr--td--img"
          src="Images/product/fruits/Apples.jpg"
          alt="img"
        />
      </td>
      <td className="cart__table-tr--td">PRODUCT</td>
      <td className="cart__table-tr--td">PRICE</td>
      <td className="cart__table-tr--td">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Count />
        </div>
      </td>
      <td className="cart__table-tr--td">PRICE * Count</td>
      <td className="cart__table-tr--td">
        <FontAwesomeIcon icon="trash" className="cart__table-tr--td--icon" />
      </td>
    </tr>
  );
};
export default TableRow;
