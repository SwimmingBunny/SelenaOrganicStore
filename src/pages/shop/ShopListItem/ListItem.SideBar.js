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
    dispatch(filterType(item));
  };

  const handleColor = (i) => {
    dispatch(filterColor(i));
  };
  return (
    <div className="sidebar">
      <h1 className="sidebar__h1">Categories</h1>
      <Menu onClick={handleClick} className="sidebar__menu1" mode="inline">
        <Menu.ItemGroup key="sub1">
          <Menu.Item key="1">Vegetables</Menu.Item>
          <Menu.Item key="11">Fruits</Menu.Item>
          <Menu.Item key="8">Juice</Menu.Item>
          <Menu.Item key="5">Meat</Menu.Item>
        </Menu.ItemGroup>
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
