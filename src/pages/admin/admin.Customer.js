/** @format */

import React from "react";
import {
  EditFilled,
  DeleteOutlined,
  SaveOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getListCustomerApi,
  deleteListCustomerApi,
  updateCustomerApi,
  setSortUser,
  searchUser
} from "../../redux/reducers/customerSlice";
import { useState } from "react";
import { Input,Select,Button } from "antd";

const AdminRow = () => {
  const dispatch = useDispatch();
  const { listCustomerApi } = useSelector((state) => state.listCustomer);
  const [edit, setEdit] = useState();
  const { Option } = Select;
  React.useEffect(() => {
    dispatch(getListCustomerApi());
  }, []);

  const [formNewVl, setFormNewVl] = useState({
    fullName: '',
    username: '',
    mail: '',
    phone:'',
    address:'',
    password: '',
    search: ''
  });
  const handelOnChange = (e) => {
    if (e.target) {
      setFormNewVl({ ...formNewVl, [e.target.name]: e.target.value });
    } else {
      setFormNewVl({ ...formNewVl});
    }
  };

  const handleEdit = (id) => {
    setEdit(id);
  };

  const handleSave = async(id) => {
    await dispatch(updateCustomerApi({ ...formNewVl, id }));
    setEdit();
    dispatch(getListCustomerApi());
  };
  function handleChange(value) {
    dispatch(setSortUser(value))
  }
  const handleSearch= ()=>{
    dispatch(searchUser(formNewVl.search.toUpperCase()))
  }

  const renderListCustomer = () => {
    return listCustomerApi.map((item, index) => {
      return (
        <>
          {edit === item.id ? (
            <tr>
              <td>{item.id}</td>
              <td>
                <Input
                  name='fullName'
                  onChange={(e) => handelOnChange(e)}
                  placeholder={item.fullName}
                  value={formNewVl.fullName}
                />
              </td>
              <td>
                <Input
                  name='username'
                  onChange={(e) => handelOnChange(e)}
                  placeholder={item.username}
                  value={formNewVl.username}
                />
              </td>
              <td>
                <Input
                  name='mail'
                  onChange={(e) => handelOnChange(e)}
                  placeholder={item.mail}
                  value={formNewVl.mail}
                />
              </td>
              <td>
                <Input
                  name='phone'
                  onChange={(e) => handelOnChange(e)}
                  placeholder={item.phone}
                  value={formNewVl.phone}
                />
              </td>
              <td>
                <Input
                  name='address'
                  onChange={(e) => handelOnChange(e)}
                  placeholder={item.address}
                  value={formNewVl.address}
                />
              </td>
              <td className='icon'>
                <SaveOutlined
                  htmlType='submit'
                  onClick={() => {
                    handleSave(item.id);
                  }}
                />
              </td>
              <td className='icon'>
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
              <td>{item.fullName}</td>
              <td>{item.username}</td>
              <td>{item.mail}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
              <td className='icon'>
                <EditFilled
                  onClick={async() => {
                    handleEdit(item.id);
                  }}
                />
              </td>
              <td className='icon'>
                <DeleteOutlined
                  onClick={async () => {
                    const isDele = window.confirm("Are you sure delete this user?")
                    if(isDele === true) {
                      await dispatch(deleteListCustomerApi(item.id));
                      dispatch(getListCustomerApi());
                    }
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
      <h2>Customer Managerment </h2>
      <div className='top top--flex'>
        <div>
          <Select
            defaultValue='All'
            style={{ width: 120 }}
            onChange={handleChange}>
            <Option value='All'>All</Option>
            <Option value='Name'>Name (A-Z)</Option>
            <Option value='Stock'>Date Create</Option>
          </Select>
        </div>
        <div className='top--width top--flex'>
          <Input placeholder='Search...' name='search' onChange={(e)=>{handelOnChange(e)}} value={formNewVl.search} />
          <Button htmlType="html" onClick={handleSearch}>Search</Button>
        </div>
      </div>
      <table>
        <tr>
          <th className='id'>ID</th>
          <th className='fullName'>Full Name</th>
          <th className='name'>Username</th>
          <th className='email'>Email</th>
          <th className='phone'>Phone</th>
          <th className='address'>Address</th>
          <th className='edit'>Edit</th>
          <th className='delete'>Delete</th>
        </tr>
        {renderListCustomer()}
      </table>
    </div>
  );
};
export default AdminRow;
