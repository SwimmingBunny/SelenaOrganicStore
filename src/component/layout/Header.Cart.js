import React from "react";
import { Menu, Button } from "antd";
import { ROUTE } from "../../constant/router.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "antd/dist/antd.css";
import "../../style/style.scss";
import "../../style/base.scss";
import "../../responsive/responsive.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  deleteItemCart,
  getListProductApi,
} from "../../redux/reducers/productSlice";

library.add(faShoppingCart, faTrash);
const HeaderCart = (props) => {
  const { key, name, price, img } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListProductApi());
  }, []);
  return (
    <div className="header__top-cart-container">
      <Menu.Item>
        <div className="header__top-container">
          <div>
            <img className="header__top-container-img" src={img} alt="" />
          </div>
          <div className="header__top-container-info">
            <span className="header__top-container-info--prd">{name}</span>
            <span className="header__top-container-info--prd">Qty:</span>
            <span className="header__top-container-info--prc">
              Price: ${price}
            </span>
          </div>
          <div className="header__top-container-clear">x</div>
        </div>
      </Menu.Item>
    </div>
  );
};
export default HeaderCart;
