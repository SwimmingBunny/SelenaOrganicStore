/** @format */

import React from "react";
import { Input, Avatar, Row, Col, Menu, Dropdown } from "antd";
import {
  UserOutlined,
  MessageOutlined,
  BellOutlined,
  LayoutOutlined,
  AppstoreOutlined,
  DownOutlined,
  MenuOutlined,
  ShopOutlined
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
} from "react-router-dom";
import "./admin.scss";
const Admin = () => {
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
    <Menu className='admin-submenu'>
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
        <Row>
          {isMoblie ? (
            <Col span={24}>
              <Dropdown
                overlay={submenu}
                className='admin-menu'
                placement='bottomCenter'>
                <p>
                  Menu{" "}
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
                  <LayoutOutlined className='icon' />
                  Dashboard
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
            </Col>
          )}

          <Col span={18}>
              <div className='admin__content'>
                 <h1>Hello!</h1>
              </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default Admin;
