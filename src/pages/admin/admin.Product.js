/** @format */

import React from "react";
import { EditFilled, DeleteOutlined,SaveOutlined,CloseOutlined  } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteListProductApi, getListProductApi, updateProductApi } from "../../redux/reducers/productSlice";
import { Input } from "antd";
import { useState } from "react";

const ProductRow = () => {
  const dispatch = useDispatch();
  const { listProductInit } = useSelector((state) => state.listProduct);
  const [edit, setEdit] = useState();
  

  React.useEffect(() => {
    dispatch(getListProductApi());
  }, []);

  const [formNewVl, setFormNewVl] = useState(
    {
      name: "",
      stock: "",
      price: "",
      type: "",
    }
  )
  const handelOnChange = (e) => {
    if (e.target) {
      setFormNewVl({ ...formNewVl, [e.target.name]: e.target.value });
      console.log(e.target.value);
    } else {
      setFormNewVl({ ...formNewVl});
    }
  };
  const handleEdit = (id) => {
    setEdit(id);
  };

  const handleSave = (id) => {
    dispatch(updateProductApi({...formNewVl,id}));
    setEdit();
    
  };

  
  const renderListProduct = () => {
    return listProductInit.map((item, index) => {
      return (
        <>
        {edit === item.id ?
           <tr>
           <td>{item.id}</td>
           <td><Input name='name' onChange={(e)=>handelOnChange(e)} placeholder={item.name} value={formNewVl.name}/></td>
           <td><Input name='stock' onChange={(e)=>handelOnChange(e)} placeholder={item.stock} value={formNewVl.stock}/></td>
           <td><Input name='price' onChange={(e)=>handelOnChange(e)} placeholder={item.price} value={formNewVl.price}/></td>
           <td><Input name='type' onChange={(e)=>handelOnChange(e)} placeholder={item.type} value={formNewVl.type}/></td>
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
         </tr>:
          <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.type}</td>
          <td>{item.stock}</td>
          <td>{item.price}</td>
          <td className='icon'>
            <EditFilled  onClick={()=>{handleEdit(item.id)}}/>
          </td>
          <td className='icon'>
            <DeleteOutlined onClick={async () => {
                await dispatch(deleteListProductApi(item.id));
                dispatch(getListProductApi());
              }}/>
          </td>
        </tr>
        }
      </>
      );
    });
  };
  return (
    <>
      <tr>
        <th className='id'>ID</th>
        <th className='name'>Product</th>
        <th className='type'>Type</th>
        <th className='stock'>Stock</th>
        <th className='price'>Price ($)</th>
        <th className='edit'>Edit</th>
        <th className='delete'>Delete</th>
      </tr>
      {renderListProduct()}
    </>
  );
};
export default ProductRow;
