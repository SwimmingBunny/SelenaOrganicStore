import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteItemWishlist, getListProductApi } from "../../../redux/reducers/productSlice";

library.add(faTrash, faPlus);
const WishListRow = (props) => {
  const dispatch = useDispatch();
  
  const {id,name,img,stock, price} = props;
  useEffect(() => {
    dispatch(getListProductApi());
  }, []);
  
  const handleAddCart = () => {
    dispatch(addToCart({ id, img, name, price, stock,total: price, count : 1 }));
    alert("Add to your card success!");
  };

  return (
    <tr className="wishlist__table-tr">
      <td className="wishlist__table-tr--td ">
        <img
          className="wishlist__table-tr--td--img"
          src={img}
          alt={img}
        />
      </td>
      <td className="wishlist__table-tr--td">{name}</td>
      <td className="wishlist__table-tr--td">{price}</td>
      <td className="wishlist__table-tr--td">
        {stock !== 0 ? (
          <p className="wishlist__table-tr--td--pblue" >
            In Stock
          </p>
        ) : (
          <p className="wishlist__table-tr--td--pred" >
            Stock Out
          </p>
        )}
      </td>
      <td className="wishlist__table-tr--td">
        <p className="wishlist__table-tr--td--ad" onClick={()=>{handleAddCart()}}>Add</p>
      </td>
      <td className="wishlist__table-tr--td">
        <FontAwesomeIcon
          icon="trash"
          className="wishlist__table-tr--td--icon"
          onClick={()=>{dispatch(deleteItemWishlist(id))}}
        />
      </td>
    </tr>
  );
};
export default WishListRow;
