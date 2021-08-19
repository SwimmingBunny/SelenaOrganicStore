import React from "react";
import { Input, Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "../../style/style.scss";
import "../../style/base.scss";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faTrash, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faShoppingCart, faTrash);

const Header = () => {
  const { Search } = Input;
  const accountMenu = (
    <Menu className="header__top-account-sub">
      <Menu.Item>
        <a>My Account </a>
      </Menu.Item>
      <Menu.Item>
        <a>Login</a>
      </Menu.Item>
      <Menu.Item>
        <a>Register</a>
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
          <Button id="header__top-container-btn" type="primary">
            View Cart
          </Button>
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
      <Menu.Item>
        <a className="header__top-submenu--a">Shop List Item </a>
      </Menu.Item>
      <Menu.Item>
        <a className="header__top-submenu--a">Product Detail</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__top">
            <img
              className="header__top-img"
              src="https://template.hasthemes.com/selena/selena/assets/img/logo/logo.png"
              alt="Logo image"
            />
            <div className="header__top-right">
              <div className="header__top-account">
                <Dropdown overlay={accountMenu}>
                  <a className="header__top-account-a">
                    My Account <DownOutlined />
                  </a>
                </Dropdown>
              </div>
              <div className="header__top-search">
                <Search enterButton placeholder="search here" />
              </div>
              <div className="header__top-cart">
                <Dropdown overlay={cartMenu}>
                  <a>
                    <FontAwesomeIcon
                      className="header__top-cart-icon"
                      icon="shopping-cart"
                    />
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Header Menu */}
      <div className="container">
        <div className="header__top-menu">
          <nav>
            <ul className="header__top-menu-ul">
              <li>
                <a className="header__top-menu-a" href="">
                  HOME
                </a>
              </li>
              <li>
                <a className="header__top-menu-a" href="">
                  PAGES
                </a>
              </li>
              <li>
                <div>
                  <Dropdown overlay={shoplist}>
                    <a className="header__top-menu-a">
                      SHOP <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
              </li>
              <li>
                <a className="header__top-menu-a" href="">
                  ABOUT US
                </a>
              </li>
              <li>
                <a className="header__top-menu-a" href="">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <hr />
      </div>
    </>
  );
};
export default Header;
