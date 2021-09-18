/** @format */

import React from "react";
import { Menu } from "antd";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import {
  getListProductApi,
  setSortItem,
} from "../../../redux/reducers/productSlice";
import ProductItem from "../../../component/commont/ProductsItem";

import { Slider } from "antd";
const SideBar = () => {
  const { SubMenu } = Menu;
  const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5"];
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);
  const dispatch = useDispatch();
  const { listProductApi } = useSelector((state) => state.listProduct);

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

  console.log(
    "🚀 ~ file: ListItem.SideBar.js ~ line 14 ~ SideBar ~ listProductApi",
    listProductApi
  );

  // function onAfterChange(value) {
  //   console.log("onAfterChange: ", value);
  // }
  return (
    <div className='sidebar'>
      <h1 className='sidebar__h1'>Categories</h1>
      <Menu
        mode='inline'
        // openKeys={openKeys}
        // onOpenChange={onOpenChange}
        className='sidebar__menu1'>
        <SubMenu key='sub1' title='Vegetable' className='sidebar__menu-submenu'>
          <Menu.Item key='1'>ALL</Menu.Item>
          <Menu.Item key='2'>Name (A-Z)</Menu.Item>
          <Menu.Item key='3'>Rating</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' title='Fruits'>
          <Menu.Item key='1'>ALL</Menu.Item>
          <Menu.Item key='2'>Name (A-Z)</Menu.Item>
          <Menu.Item key='3'>Rating</Menu.Item>
        </SubMenu>
        <SubMenu key='sub3' title='Juice'>
          <Menu.Item key='1'>ALL</Menu.Item>
          <Menu.Item key='2'>Name (A-Z)</Menu.Item>
          <Menu.Item key='3'>Rating</Menu.Item>
        </SubMenu>
        <SubMenu key='sub4' title='Meat'>
          <Menu.Item key='1'>ALL</Menu.Item>
          <Menu.Item key='2'>Name (A-Z)</Menu.Item>
          <Menu.Item key='3'>Rating</Menu.Item>
        </SubMenu>
      </Menu>{" "}
      {/* split */}
      <h1 className='sidebar__h1'>Filter By Price</h1>
      <Slider
        defaultValue={1}
        max={3}
        onChange={onChange}
        // onAfterChange={onAfterChange}
      />
      <div className='sidebar__img'>
        {isMoblie ? (
          <img
            style={{ width: "100%" }}
            src='Images/banner/slide_6.jpg'
            alt=''
          />
        ) : (
          <img src='Images/banner/banner_left.jpg' alt='' />
        )}
      </div>
    </div>
  );
};
export default SideBar;
