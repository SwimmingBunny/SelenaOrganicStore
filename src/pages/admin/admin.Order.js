/** @format */

import React from "react";
import {
  EditFilled,
  DeleteOutlined,
  SaveOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getListProductApi, setSort } from "../../redux/reducers/productSlice";
import { Button, Input, Select,message } from "antd";
import { useState } from "react";
import {
  deleteOrderApi,
  getOrderApi,
  getOrderUserApi,
  searchItem,
  updateOrderApi,
} from "../../redux/reducers/orderSlice";
import { getListCustomerApi } from "../../redux/reducers/customerSlice";
import moment from "moment";

const Order = () => {
  const dispatch = useDispatch();
  const { listOrderApi } = useSelector((state) => state.listOrder);
  const { listCustomerApi } = useSelector((state) => state.listCustomer);
  const [edit, setEdit] = useState();
  const [status, setStatus] = useState("Pending");
  const { Option } = Select;
  React.useEffect(() => {
    dispatch(getListProductApi());
    dispatch(getOrderApi());
    dispatch(getListCustomerApi());
  }, []);

  const [formNewVl, setFormNewVl] = useState({
    name: "",
    fullName: "",
    price: "",
    type: "",
    search: "",
  });
  const handelOnChange = (e) => {
    if (e.target) {
      setFormNewVl({ ...formNewVl, [e.target.name]: e.target.value });
      console.log(e.target.value);
    } else {
      setFormNewVl({ ...formNewVl });
    }
  };
  function handleChange(value) {
    dispatch(setSort(value));
  }
  function handleStatusChange(value) {
    console.log(`selected ${value}`);
    setStatus(value)
  }
  const handleSearch = () => {
    dispatch(searchItem(formNewVl.search));
  };
  const handleEdit = (id) => {
    setEdit(id);
  };
  const handleSave = (id) => {
    dispatch(updateOrderApi({status,id}));
    message.success('Update Success', 4);
    dispatch(getOrderApi());
    setEdit();
  };
  const renderListOrder = () => {
    return listOrderApi.map((item) => {
      const userId = item.customer_id;
      const listUser = listCustomerApi.filter((item) => {
        return item.id === userId;
      });
      const user = listUser.map((item) => {
        return (
          <>
            <td>{item.fullName}</td>
            <td>{item.phone}</td>
            <td>{item.address}</td>
          </>
        );
      });
      return (
        <>
          {edit === item.id ? (
            <tr>
              <td>{item.id}</td>
              {user}
              <td>
                <Select
                  defaultValue='Pending'
                  style={{ width: 120 }}
                  onChange={handleStatusChange}>
                  <Option value='Pending'>Pending</Option>
                  <Option value='Delivery'>Delivery</Option>
                  <Option value='Done'>Done</Option>
                </Select>
              </td>
              <td>{moment(item.date).format("DD-MM-YYYY")}</td>
              <td>{item.total}</td>
              <td className="icon">
                  <SaveOutlined
                    htmlType="submit"
                    onClick={() => {
                      handleSave(item.id);
                    }}
                  />
                </td>
                <td className="icon">
                  <CloseOutlined
                    onClick={() => {
                      setEdit();
                    }}
                  />
                </td>
            </tr>
          ) : (
            <tr>
              <td>{item.id}</td>
              {user}
              <td>{item.status}</td>
              <td>{moment(item.date).format("DD-MM-YYYY")}</td>
              <td>{item.total}</td>
              <td className='icon'>
                <EditFilled
                  onClick={() => {
                    handleEdit(item.id);
                  }}
                />
              </td>
              <td className='icon'>
                <DeleteOutlined
                  onClick={async () => {
                    await dispatch(deleteOrderApi(item.id));
                    dispatch(getOrderApi());
                  }}
                />
              </td>
            </tr>
          )}
        </>
      );
    });
  };
  return (
    <div className='admin__users'>
      <h2>Order Managerment </h2>
      <div className='top top--flex'>
        <div>
          <Select
            defaultValue='All'
            style={{ width: 120 }}
            onChange={handleChange}>
            <Option value='All'>All</Option>
            <Option value='Name'>Name (A-Z)</Option>
            <Option value='total'>Total (L-H)</Option>
            <Option value='status'>Status</Option>
          </Select>
        </div>
        <div className='top--width top--flex'>
          <Input
            placeholder='Search...'
            name='search'
            onChange={(e) => {
              handelOnChange(e);
            }}
            value={formNewVl.search}
          />
          <Button htmlType='html' onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>
      <table>
        <tr>
          <th className='id'>ID</th>
          <th className='fullName'>Full Name</th>
          <th className='phone'>Phone</th>
          <th className='address'>Address</th>
          <th className='status'>Status</th>
          <th className='date'>Date</th>
          <th className='total'>Total ($)</th>
          <th className='edit'>Edit</th>
          <th className='delete'>Delete</th>
        </tr>
        {renderListOrder()}
      </table>
    </div>
  );
};
export default Order;
