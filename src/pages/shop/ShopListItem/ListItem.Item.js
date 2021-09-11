/** @format */

import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Select, Pagination } from "antd";
import { useMediaQuery } from "react-responsive";

import ProductItem from "../../../component/commont/ProductsItem";
import { getListProductApi } from "../../../redux/reducers/productSlice";

import { Button } from "antd";
import $ from "jquery";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faColumns, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faColumns, faWindowMaximize);
const ShopItem = () => {
  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });
  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > 800 && isMoblie === true) {
      $(".shopitem__sortitem").addClass("subfixed");
    } else {
      $(".shopitem__sortitem").removeClass("subfixed");
    }
  });

  const { Option } = Select;
  const dispatch = useDispatch();
  const [changeUI, setChangeUI] = React.useState(true);
  const listProductApi = useSelector(
    (state) => state.listProduct.listProductApi
  );
  const [listProduct, setListProduct] = React.useState(listProductApi)
  React.useEffect(() => {
    dispatch(getListProductApi());
  }, []);
 
 
  const handleChangeUI = () => {
    setChangeUI(!changeUI);
  };
  const renderListProduct = () => {
    console.log("list", listProductApi);
    return listProductApi.map((item, index) => {
      return (
        <ProductItem
          key={index}
          img={item.img}
          name={item.name}
          price={item.price}
          sell={item.sell}
          id={index}
        />
      );
    });
  };
  function handleChange(value) {
    console.log(`selected ${value}`);
    console.log("long", listProductApi);

  const handelFilter = () => {
    const booksSort = [...listProductApi].sort((a, b) => {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    });
  };

  return (
    <div className='shopitem'>
      <div className='shopitem__sortitem'>
        <div style={{ margin: "1rem " }}>
          <span className='shopitem__sortitem-sort--span'>Sort By:</span>
          <Select
            defaultValue='Revelence'
            style={{ width: 120 }}
            onChange={handleChange}
            className='shopitem__sort-select'>
            <Option value='Revelence'>Revelence</Option>
            <Option value='Name'>Name (A-Z) </Option>
            <Option value='Rating'>Rating </Option>
            <Option value='best'>Best Seller </Option>
            <Option value='hot'>Hot&New </Option>
          </Select>
          <Button onClick={handelFilter}>Apply</Button>
        </div>
      </div>
      <div className='shopitem__sortitem-sort'>
        <div className='shopitem__sortitem-layout'>
          {changeUI ? (
            <button
              type='primary'
              onClick={handleChangeUI}
              className='shopitem__sortitem-layout--btn'>
              <FontAwesomeIcon icon='window-maximize' />
            </button>
          ) : (
            <button
              type='primary'
              onClick={handleChangeUI}
              className='shopitem__sortitem-layout--btn'>
              <FontAwesomeIcon icon='columns' />
            </button>
          )}
        </div>
        <div>Showing 1-12 of 32 results</div>
      </div>

      <div>
        <Row gutter={16} className='product__list'>
          {renderListProduct()}
        </Row>
      </div>
      <div className='shopitem__pagi'>
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
}
};
export default ShopItem;
