/** @format */

import React from "react";
import { EditFilled, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getListCustomerApi,deleteUser, deleteListCustomerApi } from "../../redux/reducers/customerSlice";

const AdminRow = () => {
  const dispatch = useDispatch();
  const { listCustomerApi } = useSelector((state) => state.listCustomer);

  React.useEffect(() => {
    dispatch(getListCustomerApi());
  }, []);
  const renderListCustomer = () => {
    return listCustomerApi.map((item, index) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.username}</td>
          <td>{item.mail}</td>
          <td>{item.phone}</td>
          <td className='icon'>
            <EditFilled />
          </td>
          <td className='icon'>
            <DeleteOutlined onClick={()=>{dispatch(deleteUser(item.id))}}/>
          </td>
        </tr>
      );
    });
  };
  return (
    <>
      <tr>
        <th className='id'>ID</th>
        <th className='name'>Name</th>
        <th className='email'>Email</th>
        <th className='password'>Password</th>
        <th className='edit'>Edit</th>
        <th className='delete' >Delete</th>
      </tr>
      {renderListCustomer()}
    </>
  );
};
export default AdminRow;
