import React from "react";
import { Input } from "antd";
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
                <nav>
                  <ul className="header__top-account-ul">
                    <li className="header__top-account-li">
                      <a href="" className="header__top-account-a">
                        My Account
                      </a>
                      <div className="header__top-account-noti">
                        <nav>
                          <ul>
                            <li>My account</li>
                            <li>Login</li>
                            <li>Register</li>
                          </ul>
                        </nav>
                        {/* <p>My account </p>
                        <p>Login</p>
                        <p> Register</p> */}
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header__top-search">
                <Search enterButton placeholder="search here" />
              </div>
              <div className="header__top-cart">
                <FontAwesomeIcon icon="shopping-cart" />
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
                <a className="header__top-menu-a" href="">
                  SHOP
                </a>
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
      </div>
    </>
  );
};
export default Header;
