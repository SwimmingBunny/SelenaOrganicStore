import React from "react";
import { Menu } from "antd";
import { useMediaQuery } from "react-responsive";

const SideBar = () => {
  const { SubMenu } = Menu;
  const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5"];
  const [openKeys, setOpenKeys] = React.useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });

  return (
    <div className="sidebar">
      <h1 className="sidebar__h1">Categories</h1>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        className="sidebar__menu1"
      >
        <SubMenu key="sub1" title="Vegetable" className="sidebar__menu-submenu">
          <Menu.Item key="1">Sell</Menu.Item>
          <Menu.Item key="2">Hot&New</Menu.Item>
          <Menu.Item key="3">Bestseller</Menu.Item>
          <Menu.Item key="4">All item</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="Fruits">
          <Menu.Item key="1">Sell</Menu.Item>
          <Menu.Item key="2">Hot&New</Menu.Item>
          <Menu.Item key="3">Bestseller</Menu.Item>
          <Menu.Item key="4">All item</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title="Juice">
          <Menu.Item key="1">Sell</Menu.Item>
          <Menu.Item key="2">Hot&New</Menu.Item>
          <Menu.Item key="3">Bestseller</Menu.Item>
          <Menu.Item key="4">All item</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title="Meat">
          <Menu.Item key="1">Sell</Menu.Item>
          <Menu.Item key="2">Hot&New</Menu.Item>
          <Menu.Item key="3">Bestseller</Menu.Item>
          <Menu.Item key="4">All item</Menu.Item>
        </SubMenu>
      </Menu>{" "}
      {/* split */}
      <h1 className="sidebar__h1">Filter By Price</h1>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        className="sidebar__menu2"
      >
        <SubMenu key="sub5" title="Price" className="sidebar__menu-submenu">
          <Menu.Item className="sidebar__menu-submenu--item" key="1">
            $0 - $50
          </Menu.Item>
          <Menu.Item key="2"> $50 - $100</Menu.Item>
          <Menu.Item key="3">$100 - more</Menu.Item>
        </SubMenu>
      </Menu>
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
