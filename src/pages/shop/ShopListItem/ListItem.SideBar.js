import React from "react";
import { Menu } from "antd";
import { useMediaQuery } from "react-responsive";
import { Slider } from "antd";

const SideBar = () => {
  const { SubMenu } = Menu;
  const handleClick = (e) => {
    console.log("click o day ", e);
  };
  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });
  function onChange(value) {
    console.log("onChange: ", value);
  }

  function onAfterChange(value) {
    console.log("onAfterChange: ", value);
  }
  return (
    <div className="sidebar">
      <h1 className="sidebar__h1">Categories</h1>
      <Menu
        onClick={handleClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        className="sidebar__menu1"
        mode="inline"
      >
        <SubMenu key="sub1" title="Vegetable" className="sidebar__menu-submenu">
          <Menu.ItemGroup key="sub1">
            <Menu.Item key="1">All product</Menu.Item>
            <Menu.Item key="2">Price</Menu.Item>
            <Menu.Item key="3">Rating</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" title="Meat">
          <Menu.Item key="5">All product</Menu.Item>
          <Menu.Item key="6">Price</Menu.Item>
          <Menu.Item key="7">Rating</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title="Juice">
          <Menu.Item key="8">All product</Menu.Item>
          <Menu.Item key="9">Price</Menu.Item>
          <Menu.Item key="10">Rating</Menu.Item>
        </SubMenu>
        <SubMenu key="sub5" title="Fruits">
          <Menu.Item key="11">All product</Menu.Item>
          <Menu.Item key="12">Price</Menu.Item>
          <Menu.Item key="13">Rating</Menu.Item>
        </SubMenu>
      </Menu>
      {/* split */}
      <h1 className="sidebar__h1">Filter By Price</h1>
      <Slider
        defaultValue={1}
        max={4}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
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
