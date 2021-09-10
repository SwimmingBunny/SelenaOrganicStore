import React from "react";
import SubMenu from "./Header.subMenu.js";
import { useMediaQuery } from "react-responsive";
import { Input, Menu, Dropdown, Button, Row, Col, Avatar, Image } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { DownOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { ROUTE } from "../../constant/router.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import $ from "jquery";
import "antd/dist/antd.css";
import "../../style/style.scss";
import "../../style/base.scss";
import "../../responsive/responsive.scss";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faShoppingCart, faTrash);

const Header = () => {
  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });
  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > 73 && isMoblie === true) {
      $(".header__top-right").addClass("fixed");
      $(".header__submenu").addClass("menufixed");
    } else {
      $(".header__top-right").removeClass("fixed");
      $(".header__submenu").removeClass("menufixed");
    }
  });

  const history = useHistory();
  function goHome() {
    history.push("/");
  }
  const { Search } = Input;
  const accountMenu = (
    <Menu className="header__top-account-sub">
      <Menu.Item>
      <NavLink to={ROUTE.MYACCOUNT} exact>
        My Account
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to={ROUTE.LOGIN} exact>
          Login
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to={ROUTE.REGISTER} exact>
          Register
        </NavLink>
      </Menu.Item>
    </Menu>
  );
  const cartMenu = (
    <Menu className="header__top-cart-sub">
      <div className="header__top-cart-container">
        <Menu.Item>
          <div className="header__top-container">
            <div>
              <img
                className="header__top-container-img"
                src="https://template.hasthemes.com/selena/selena/assets/img/cart/cart-1.jpg"
                alt=""
              />
            </div>
            <div className="header__top-container-info">
              <span className="header__top-container-info--prd">
                SIMPLE PRODUCT
              </span>
              <span className="header__top-container-info--qty">Qty:</span>
              <span className="header__top-container-info--prc">$60.00</span>
            </div>
            <div className="header__top-container-clear">x</div>
          </div>
        </Menu.Item>
        <Menu.Item>
          <span className="header__top-container-subtotal">SUBTOTAL:</span>
        </Menu.Item>
        <Menu.Item>
          <NavLink to={ROUTE.CART} exact>
            <Button id="header__top-container-btn" type="primary">
              View Cart
            </Button>
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <Button id="header__top-container-btn" type="primary">
            Check Out
          </Button>
        </Menu.Item>
      </div>
    </Menu>
  );
  const shoplist = (
    <Menu className="header__top-submenu">
      <NavLink to={ROUTE.SHOPITEM} exact>
        <Menu.Item>
          <a className="header__top-submenu--a">Shop Product</a>
        </Menu.Item>
      </NavLink>
      <NavLink to={ROUTE.WISHLIST} exact>
        <Menu.Item>
          <a className="header__top-submenu--a">Wishlist</a>
        </Menu.Item>
      </NavLink>

      <NavLink to={ROUTE.CART} exact>
        <Menu.Item>
          <a className="header__top-submenu--a">Cart</a>
        </Menu.Item>
      </NavLink>
    </Menu>
  );
  return (
    <div style={{ paddingTop: isMoblie ? "0" : "12rem" }}>
      <div className="header">
        <div className="container">
          <Row className="header__top">
            <Col
              lg={{ span: 10 }}
              xs={{ span: 24 }}
              className="header__top-img"
            >
              <img
                src="Images/logo/logo.png"
                alt="Logo image"
                onClick={goHome}
              />
            </Col>

            <Col lg={{ span: 14 }} xs={{ span: 24 }}>
              <Row className="header__top-right">
                <Col
                  className="header__top-account"
                  lg={{ span: 6 }}
                  xs={{ span: 12 }}
                >
                  <Dropdown overlay={accountMenu}>
                    <a className="header__top-account-a">
                    <Avatar style={{margin:"1rem"}} size="small" icon={<UserOutlined />} />
                      My Account <DownOutlined />
                    </a>
                  </Dropdown>
                </Col>
                <Col
                  className="header__top-search"
                  lg={{ span: 14 }}
                  xs={{ span: 24 }}
                >
                  <Search
                    id="header__top-search-input"
                    placeholder="search here"
                  />
                </Col>
                <Col
                  lg={{ span: 4 }}
                  className="header__top-cart"
                  xs={{ span: 12 }}
                >
                  <Dropdown overlay={cartMenu}>
                    {isMoblie ? (
                      <div className="submenu">
                        <FontAwesomeIcon
                          className="submenu__cart"
                          icon="shopping-cart"
                        />
                        <span>My cart</span>
                      </div>
                    ) : (
                      <a>
                        <FontAwesomeIcon
                          className="header__top-cart-icon"
                          icon="shopping-cart"
                        />
                      </a>
                    )}
                  </Dropdown>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      {/* Header Menu */}

      <div className="container">
        {isMoblie ? (
          <Row className="header__submenu">
            <Col xs={{ span: 24 }}>
              <SubMenu />
            </Col>
          </Row>
        ) : (
          <div className="header__top-menu">
            <nav>
              <ul className="header__top-menu-ul">
                <li className="header__top-menu-li">
                  <a className="header__top-menu-a" href="" onClick={goHome}>
                    HOME
                  </a>
                </li>
                <li className="header__top-menu-li">
                  <div>
                    <Dropdown overlay={shoplist}>
                      <a className="header__top-menu-a  boder-none">
                        SHOP <DownOutlined />
                      </a>
                    </Dropdown>
                  </div>
                </li>
                <li className="header__top-menu-li">
                  <NavLink to={ROUTE.ABOUTUS} exact>
                    <a className="header__top-menu-a" href="">
                      ABOUT US
                    </a>
                  </NavLink>
                </li>
                <li className="header__top-menu-li">
                  <NavLink
                    className="header__top-menu-a"
                    to={ROUTE.CONTACT}
                    exact
                  >
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
