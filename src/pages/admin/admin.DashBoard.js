/** @format */

import React from "react";
import "./admin.DashBoard.scss";
import { useDispatch, useSelector } from "react-redux";
import { Input, Avatar, Row, Col, Menu, Pagination } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";
import { setCurrentPage } from "../../redux/reducers/productSlice";
import chart from "../../demo_15270_none.png";
import { getListCustomerApi } from "../../redux/reducers/customerSlice";
import { getOrderApi } from "../../redux/reducers/orderSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { listCustomerApi } = useSelector((state) => state.listCustomer);
  const { listOrderApi } = useSelector((state) => state.listOrder);
  const { currentPage } = useSelector((state) => state.listProduct);
  const PAGE_SIZE = 8;
  React.useEffect(() => {
    dispatch(getListCustomerApi());
    dispatch(getOrderApi());
  }, []);

  const lengthCustomer = listCustomerApi.length;
  const lengthOrder = listOrderApi.length;

  const renderTotal = () => {
    let total = 0;
    listOrderApi.forEach((item) => {
      total += +item.total;
    });
    return <h1>$ {total.toFixed(2)}</h1>;
  };
  return (
    <>
      <div className="dashBoard">
        <Row>
          <Col lg={{ span: 8 }} className="dashBoard__group">
            <div>
              <UserOutlined className="dashBoard__icon" />
            </div>
            <div>
              <h2>Total Customer</h2>
              <h1>{lengthCustomer} Users</h1>
            </div>
          </Col>
          <Col lg={{ span: 8 }} className="dashBoard__group">
            <div>
              <ShoppingCartOutlined className="dashBoard__icon" />
            </div>
            <div>
              <h2>Total Order</h2>
              <h1>{lengthOrder} Orders</h1>
            </div>
          </Col>
          <Col lg={{ span: 8 }} className="dashBoard__group">
            <div>
              <DollarCircleOutlined className="dashBoard__icon" />
            </div>
            <div>
              <h2>Total Sales</h2>
              {renderTotal()}
            </div>
          </Col>
        </Row>
        <Row>
          <img className="dashBoard__chart" src={chart} />
        </Row>
      </div>
      <div className="shopitem__pagi">
        <Pagination
          pageSize={PAGE_SIZE}
          current={currentPage}
          total={listCustomerApi.length}
          onChange={(page) => {
            dispatch(setCurrentPage(page));
            window.scrollTo(0, 200);
          }}
        />
      </div>
    </>
  );
};

export default Dashboard;
