/** @format */

import React from "react";
import AdminRow from "./admin.Customer.js";
import { Input, Avatar, Row, Col, Menu, Dropdown } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  BellOutlined,
  LayoutOutlined,
  AppstoreOutlined,
  DownOutlined,
  MenuOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { ROUTE } from "../../constant/router.js";
import { useHistory } from "react-router-dom";
import ScrollToTop from "../../component/commont/ScrollToTop";
import { useMediaQuery } from "react-responsive";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useRouteMatch,useParams
} from "react-router-dom";
import "./admin.scss";
import Dashboard from "./admin.DashBoard.js";
import ProductRow from "./ProductRow.js";



const Admin = () => {
  let { path, url } = useRouteMatch();
  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });
  const menu = (
    <Menu className='sub-dropdown'>
      <Menu.Item>
        <div className='cover'>
          <Avatar size='small' icon={<UserOutlined />} />
          <p>Account</p>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className='cover'>
          <MessageOutlined className='icon' />
          <p>Message</p>
        </div>
      </Menu.Item>
      <Menu.Item>
        <div className='cover'>
          <BellOutlined className='icon' />
          <p>Notify</p>
        </div>
      </Menu.Item>
    </Menu>
  );
  const submenu = (
    <Menu className='admin-submenu' style={{ zIndex: "1000" }}>
      <Menu.Item>
        <ul className='admin-select'>
          <li>
            <LayoutOutlined className='icon' />
            Layouts
          </li>
          <li>
            <AppstoreOutlined className='icon' />
            User interface
          </li>
          <li>
            <UserOutlined className='icon' />
            User
          </li>
          <li>
            <ShopOutlined className='icon' />
            Product
          </li>
        </ul>
      </Menu.Item>
      <Menu.Item></Menu.Item>
      <Menu.Item></Menu.Item>
    </Menu>
  );
  return (
    <div className='container'>
      <div className='admin'>
        <Row className='admin-header'>
          <Col span={isMoblie ? 24 : 6}>
            <NavLink to={ROUTE.HOME} className='col-img' exact>
              <ScrollToTop />
              <img src={`http://localhost:3000/Images/logo/logo.png`} alt='Logo image' />
            </NavLink>
          </Col>
          <Col span={isMoblie ? 20 : 14} className='col-img'>
          </Col>
          <Col span={isMoblie ? 4 : 4} className='col-icon'>
            {isMoblie ? (
              <Dropdown overlay={menu}>
                <a
                  className='ant-dropdown-link'
                  onClick={(e) => e.preventDefault()}
                  style={{ color: "#62d2a2" }}>
                  <MenuOutlined />
                </a>
              </Dropdown>
            ) : (
              <>
                <MessageOutlined className='icon' />
                <BellOutlined className='icon' />
                <Avatar size='medium' icon={<UserOutlined />} />
              </>
            )}
          </Col>
        </Row>
        <Row className='admin-body'>
          {isMoblie ? (
            <Col span={24}>
              <Dropdown
                overlay={submenu}
                className='admin-menu'
                placement='bottomCenter'>
                <p>
                  Menu
                  <DownOutlined
                    style={{ fontWeight: "500", fontSize: "1.4rem" }}
                  />
                </p>
              </Dropdown>
            </Col>
          ) : (
            <Col span={6}>
              <ul className='admin-select'>
                <li>
                  <NavLink className='admin-text' to={`${url}${ROUTE.DASHBOARD}`}>
                    <LayoutOutlined className='icon' />
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <Link className='admin-text' to={`${url}${ROUTE.CUSTOMER}`}>
                    <UserOutlined className='icon' />
                    Customers
                  </Link>
                </li>
                <li>
                  <Link className='admin-text' to={`${url}${ROUTE.ORDERS}`}>
                    <ShoppingCartOutlined className='icon' />
                    Orders
                  </Link>
                </li>
                <li>
                  <Link className='admin-text' to={`${url}${ROUTE.PRODUCTS}`}>
                    <ShopOutlined className='icon' />
                    Products
                  </Link>
                </li>
              </ul>
            </Col>
          )}

          <Col span={isMoblie ? 24 : 18}>
            <div className="admin__content">
            <Switch>
            <Route path={`${path}${ROUTE.DASHBOARD}`} exact>
                <Dashboard/>
              </Route>
              <Route path={`${path}${ROUTE.CUSTOMER}`} exact>
                    <AdminRow />
              </Route>
              <Route path={`${path}${ROUTE.PRODUCTS}`} exact>
                  <ProductRow/>
              </Route>
            </Switch>
            </div>
           
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Admin;
