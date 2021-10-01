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
import { Button, Input, Select, Modal } from "antd";
import { useState } from "react";
import {
  getOrderApi,
  getOrderFindOneApi,
  getOrderUserApi,
  searchItem,
} from "../../redux/reducers/orderSlice";
import { getListCustomerApi } from "../../redux/reducers/customerSlice";
import moment from "moment";

const HistoryOrder = () => {
  const dispatch = useDispatch();
  const list = JSON.parse(localStorage.getItem("inforUser"));
  const { listProductApi } = useSelector((state) => state.listProduct);
  const { listOrderUserApi, listOrderFindOneApi } = useSelector(
    (state) => state.listOrder
  );
  const [visible, setVisible] = useState(false);
  const [idBill, setIdBill] = useState();
  console.log("🚀 ~ file: HistoryOrder.js ~ line 32 ~ HistoryOrder ~ idBill", idBill)
  const { Option } = Select;
  React.useEffect(() => {
    dispatch(getListProductApi());
    dispatch(getOrderFindOneApi(idBill));
    dispatch(getOrderApi());
    dispatch(getListCustomerApi());
  }, []);
  React.useEffect(() => {
    dispatch(getOrderUserApi(list.id));
  }, [list.id]);
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
    } else {
      setFormNewVl({ ...formNewVl });
    }
  };
  function handleChange(value) {
    dispatch(setSort(value));
  }
  const handleSearch = () => {
    dispatch(searchItem(formNewVl.search));
  };
  // console.log("--",listOrderFindOneApi);
  const renderBill = () => {
    return listOrderFindOneApi.map((item) => {
      const product_id = item.product_id;

      const infoProduct = listProductApi.filter((item) => {
        return item.id === product_id;
      });
      const renderProduct = infoProduct.map((item)=>{
        return(
          <>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
          </>
        )
      })
      return (
        <tr>
          {renderProduct}
          <td>{item.quantity}</td>
        </tr>
      );
    });
  };
  // console.log("listOrderUserApi",listOrderUserApi);
  const renderListOrder = () => {
    return listOrderUserApi.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.total} USD</td>
          <td>{item.status}</td>
          <td>{moment(item.date).format("DD-MM-YYYY")}</td>
          <td>
            <Button
              type='primary'
              onClick={() => {
                setIdBill(item.id);
                setVisible(true);
              }}>
              View
            </Button>
          </td>
          <td className='icon'>
            <DeleteOutlined />
          </td>
        </tr>
      );
    });
  };
  return (
    <div className='admin__users'>
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
          <th className='id'>STT</th>
          <th className='total'>Price($)</th>
          <th className='status'>Name</th>
          <th className='date'>Date</th>
          <th className='view'>View</th>
          <th className='delete'>Delete</th>
        </tr>
        {renderListOrder()}
      </table>
      <Modal
        className='admin__users'
        title='Bill Detail'
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={1000}>
        <table>
          <tr>
            <th className='id'>STT</th>
            <th className='name'>Product</th>
            <th className='total'>Price ($)</th>
            <th className='quantity'>Quantity</th>
          </tr>
          {renderBill()}
        </table>
      </Modal>
    </div>
  );
};
export default HistoryOrder;
