/** @format */

import React from "react";
import { Menu } from "antd";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import {
  filterType,
  getListProductApi,
  setSortItem,
  setSortPrice,
  filterColor,
} from "../../../redux/reducers/productSlice";

import { Slider } from "antd";
const SideBar = () => {
  const { SubMenu } = Menu;
  const dispatch = useDispatch();

  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });
  function onChange(value) {
    dispatch(setSortItem(value));
  }

  React.useEffect(() => {
    dispatch(getListProductApi());
  }, []);

  const handleClick = (item) => {
    dispatch(setSortPrice(item));
  };

  const handleColor = (i) => {
    dispatch(filterColor(i));
  };
  return (
    <div className="sidebar">
      <h1 className="sidebar__h1">Categories</h1>
      <Menu onClick={handleClick} className="sidebar__menu1" mode="inline">
        <SubMenu
          key="sub1"
          title="Vegetables"
          className="sidebar__menu-submenu"
          onTitleClick={() => {
            dispatch(filterType({ key: "1" }));
          }}
        >
          <Menu.ItemGroup key="sub1">
            <Menu.Item key="2">Price</Menu.Item>
            <Menu.Item key="3">Rating</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="sub2"
          title="Meat"
          onTitleClick={() => {
            dispatch(filterType({ key: "5" }));
          }}
        >
          <Menu.Item key="6">Price</Menu.Item>
          <Menu.Item key="7">Rating</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          title="Juice"
          onTitleClick={() => {
            dispatch(filterType({ key: "8" }));
          }}
        >
          <Menu.Item key="9">Price</Menu.Item>
          <Menu.Item key="10">Rating</Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub5"
          title="Fruits"
          onTitleClick={() => {
            dispatch(filterType({ key: "11" }));
          }}
        >
          <Menu.Item key="12">Price</Menu.Item>
          <Menu.Item key="13">Rating</Menu.Item>
        </SubMenu>
      </Menu>
      {/* split */}
      <h1 className="sidebar__h1">Filter By Price</h1>
      <Slider
        defaultValue={0}
        max={3}
        onChange={onChange}
        // onAfterChange={onAfterChange}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>1$</span>
        <span>10$</span>
        <span>50$</span>
        <span>100$</span>
      </div>
      <div className="sidebar__">
        <h1 className="sidebar__h1">Color</h1>

        <Menu onClick={handleColor} className="sidebar__menu1" mode="inline">
          <Menu.ItemGroup key="sub5">
            <Menu.Item key="red">Red</Menu.Item>
            <Menu.Item key="orange">Organe</Menu.Item>
            <Menu.Item key="purple">Purple</Menu.Item>
            <Menu.Item key="green">Green</Menu.Item>
            <Menu.Item key="yellow">Yellow</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </div>
      <div className="sidebar__img">
        {isMoblie ? (
          <img
            style={{ maxWidth: "250px" }}
            src="Images/banner/slide_6.jpg"
            alt=""
          />
        ) : (
          <img
            style={{ maxWidth: "250px" }}
            src="Images/banner/banner_left.jpg"
            alt=""
          />
        )}
      </div>
    </div>
  );
};
export default SideBar;
