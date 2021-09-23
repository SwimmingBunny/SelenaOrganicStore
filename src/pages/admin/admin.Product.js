/** @format */

import React from "react";
import { EditFilled, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, getListProductApi } from "../../redux/reducers/productSlice";

const ProductRow = () => {
  const dispatch = useDispatch();
  const { listProductInit } = useSelector((state) => state.listProduct);
  console.log(
    "🚀 ~ file: admin.Table.js ~ line 13 ~ AdminRow ~ listCustomerApi",
    listProductInit
  );

  React.useEffect(() => {
    dispatch(getListProductApi());
  }, []);

  const renderListProduct = () => {
    return listProductInit.map((item, index) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.stock}</td>
          <td>{item.price}</td>
          <td className='icon'>
            <EditFilled />
          </td>
          <td className='icon'>
            <DeleteOutlined onClick={()=>{dispatch(deleteItem(item.id))}} />
          </td>
        </tr>
      );
    });
  };
  return (
    <>
      <tr>
        <th className='id'>ID</th>
        <th className='name'>Product</th>
        <th className='stock'>Stock</th>
        <th className='price'>Price</th>
        <th className='edit'>Edit</th>
        <th className='delete'>Delete</th>
      </tr>
      {renderListProduct()}
    </>
  );
};
export default ProductRow;
