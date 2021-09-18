/** @format */

import React from "react";
import AdminRow from "./admin.Table.js";
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
const Admin = () => {
  let { path, url } = useRouteMatch();
  let { adminId } = useParams();
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
              <img src='Images/logo/logo.png' alt='Logo image' />
            </NavLink>
          </Col>
          <Col span={isMoblie ? 20 : 14} className='col-img'>
            <Input placeholder='Basic usage' />
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
                  <Link to={ROUTE.DASHBOARD}>
                    <LayoutOutlined className='icon' />
                    Dashboard{" "}
                  </Link>
                </li>
                <li>
                  <Link to={ROUTE.UI}>
                    <AppstoreOutlined className='icon' />
                    User interface
                  </Link>
                </li>
                <li>
                  <Link to={`${url}${ROUTE.CUSTOMER}`}>
                    <UserOutlined className='icon' />
                    Customers
                  </Link>
                </li>
                <li>
                  <Link to={ROUTE.ORDERS}>
                    <ShoppingCartOutlined className='icon' />
                    Orders
                  </Link>
                </li>
                <li>
                  <Link to={`${url}${ROUTE.PRODUCTS}`}>
                    <ShopOutlined className='icon' />
                    Products
                  </Link>
                </li>
              </ul>
            </Col>
          )}

          <Col span={isMoblie ? 24 : 18}>
            <Switch>
              <Route path={`${path}${ROUTE.CUSTOMER}`} exact>
                <div className='admin__users'>
                  <h2>Customer Managerment </h2>
                  <table>
                    <tr>
                      <th className='id'>ID</th>
                      <th className='name'>Name</th>
                      <th className='email'>Email</th>
                      <th className='password'>Password</th>
                      <th className='edit'>Edit</th>
                      <th className='delete'>Delete</th>
                    </tr>
                    <AdminRow />
                  </table>
                </div>
              </Route>
              <Route path={path} exact>
                <div className='admin__users'>
                  <h2>Product Managerment </h2>
                  <table>
                    <tr>
                      <th className='id'>ID</th>
                      <th className='name'>Product</th>
                      <th className='email'>Quantity</th>
                      <th className='password'>Price</th>
                      <th className='edit'>Edit</th>
                      <th className='delete'>Delete</th>
                    </tr>
                    <AdminRow />
                  </table>
                </div>
              </Route>
            </Switch>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Admin;
