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
} from "../../../redux/reducers/productSlice";

import { Slider } from "antd";
const SideBar = () => {
  const { SubMenu } = Menu;
  const dispatch = useDispatch();

  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });
  function onChange(value) {
    console.log("onChange: ", value);
    dispatch(setSortItem(value));
  }

  React.useEffect(() => {
    dispatch(getListProductApi());
  }, []);

  const handleClick = (item) => {
    console.log("click o day ", item);
    dispatch(setSortPrice(item));
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
      <div className="sidebar__img">
        {isMoblie ? (
          <img
            style={{ width: "100%" }}
            src="Images/banner/slide_6.jpg"
            alt=""
          />
        ) : (
          <img src="Images/banner/banner_left.jpg" alt="" />
        )}
      </div>
    </div>
  );
};
export default SideBar;
