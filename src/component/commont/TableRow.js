import React from "react";
import Count from "./Count";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteItemCart, getListProductApi, } from "../../redux/reducers/productSlice";

library.add(faTrash);
const TableRow = (props) => {

  const {id,name, price, img } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListProductApi())
  }, [])

  return (
    <tr className="cart__table-tr">
      <td className="cart__table-tr--td ">
        <img
          className="cart__table-tr--td--img"
          src={img}
          alt="img"
        />
      </td>
      <td className="cart__table-tr--td">{name}</td>
      <td className="cart__table-tr--td">${price}</td>
      <td className="cart__table-tr--td">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Count />
        </div>
      </td>
      <td className="cart__table-tr--td">{price} * Count</td>
      <td className="cart__table-tr--td">
        <FontAwesomeIcon icon="trash" className="cart__table-tr--td--icon" onClick={() => {dispatch(deleteItemCart(id))}}/>
      </td>
    </tr>
  );
};
export default TableRow;
