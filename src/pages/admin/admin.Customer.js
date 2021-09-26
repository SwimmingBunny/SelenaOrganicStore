/** @format */

import React from "react";
import { EditFilled, DeleteOutlined,SaveOutlined,CloseOutlined  } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getListCustomerApi,
  deleteListCustomerApi,
  updateCustomerApi,
} from "../../redux/reducers/customerSlice";
import { useState } from "react";
import { Input } from "antd";

const AdminRow = () => {
  const dispatch = useDispatch();
  const { listCustomerApi } = useSelector((state) => state.listCustomer);
  const [edit, setEdit] = useState();
  React.useEffect(() => {
    dispatch(getListCustomerApi());
  }, []);

  const [formNewVl, setFormNewVl] = useState(
    {
      username: '',
      mail: '',
      phone: '',
      password: ''
    }
  )
  const handelOnChange = (e) => {
    if (e.target) {
      setFormNewVl({ ...formNewVl, [e.target.name]: e.target.value });
      console.log(e.target.value);
    } else {
      setFormNewVl({ ...formNewVl, deadline: e });
    }
  };

  const handleEdit = (id) => {
    setEdit(id);
  };

  const handleSave = (id) => {
    console.log(" {...formNewVl}", {...formNewVl})
    dispatch(updateCustomerApi({...formNewVl,id}));
    setEdit();
    
  };
  const renderListCustomer = () => {
    return listCustomerApi.map((item, index) => {
      return (
        <>
          {edit=== item.id ? (
            <tr>
            <td>{item.id}</td>
            <td><Input name='username' onChange={(e)=>handelOnChange(e)} placeholder={item.username} value={formNewVl.username}/></td>
            <td><Input name='mail' onChange={(e)=>handelOnChange(e)} placeholder={item.mail} value={formNewVl.mail}/></td>
            <td><Input name='phone' onChange={(e)=>handelOnChange(e)} placeholder={item.phone} value={formNewVl.phone}/></td>
            <td><Input name='password' onChange={(e)=>handelOnChange(e)} placeholder={item.password} value={formNewVl.password}/></td>
            <td className='icon'>
              <SaveOutlined 
                htmlType='submit'
                onClick={() => {handleSave(item.id)}}
              />
            </td>
            <td className='icon'>
            <CloseOutlined onClick={() => {
                  setEdit();
                }}/>
            </td>
          </tr>
          ) : (
            <tr>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.mail}</td>
              <td>{item.phone}</td>
              <td>*********</td>
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
                    await dispatch(deleteListCustomerApi(item.id));
                    dispatch(getListCustomerApi());
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
    <>
      <tr>
        <th className='id'>ID</th>
        <th className='name'>Name</th>
        <th className='email'>Email</th>
        <th className='phone'>Phone</th>
        <th className='password'>Password</th>
        <th className='edit'>Edit</th>
        <th className='delete'>Delete</th>
      </tr>
      {renderListCustomer()}
    </>
  );
};
export default AdminRow;
