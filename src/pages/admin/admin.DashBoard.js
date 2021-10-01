/** @format */

import React from "react";
import "./admin.DashBoard.scss";
import { useDispatch,useSelector } from "react-redux";
import { Input, Avatar, Row, Col, Menu, Dropdown } from "antd";
import { UserOutlined,ShoppingCartOutlined, DollarCircleOutlined } from "@ant-design/icons";
import chart from '../../demo_15270_none.png';
import { getListCustomerApi } from "../../redux/reducers/customerSlice";
import { getOrderApi } from "../../redux/reducers/orderSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const {listCustomerApi} = useSelector(state => state.listCustomer);
  const {listOrderApi} = useSelector(state => state.listOrder);
  React.useEffect(() => {
    dispatch(getListCustomerApi());
    dispatch(getOrderApi());
  }, []);
  
  const lengthCustomer = listCustomerApi.length;
  const lengthOrder = listOrderApi.length;

  const renderTotal = () =>{
    const priceItem = listOrderApi.map((item)=>item.total);
    let total = 0;
    total = total + parseInt(priceItem)
    return <h1>$ {total}</h1>
  }
  return (
    <div className='dashBoard'>
      <Row >
        <Col lg={{ span: 8}} className='dashBoard__group'>
          <div>
            <UserOutlined className='dashBoard__icon' />
          </div>
          <div>
            <h2>Total Customer</h2>
            <h1>{lengthCustomer} Users</h1>
          </div>
        </Col>
        <Col lg={{ span: 8 }} className='dashBoard__group'>
            <div>
            <ShoppingCartOutlined className='dashBoard__icon' />
          </div>
          <div>
            <h2>Total Order</h2>
            <h1>{lengthOrder} Orders</h1>
          </div></Col>
          <Col lg={{ span: 8 }} className='dashBoard__group'>
            <div>
            < DollarCircleOutlined className='dashBoard__icon' />
          </div>
          <div>
            <h2>Total Sales</h2>
            {renderTotal()}
          </div></Col>
      </Row>
      <Row >
            <img className="dashBoard__chart" src={chart}/>
      </Row>
    </div>
  );
};

export default Dashboard;
