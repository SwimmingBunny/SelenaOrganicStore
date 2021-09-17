/** @format */

import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Select, Pagination } from "antd";
import { useMediaQuery } from "react-responsive";
import ScrollToTop from '../../../component/commont/ScrollToTop'
import { useEffect } from "react";
import ProductItem from "../../../component/commont/ProductsItem";
import { getListProductApi } from "../../../redux/reducers/productSlice";
import { Button } from "antd";
import $ from "jquery";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faColumns, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faColumns, faWindowMaximize);
const ShopItem = () => {
const [currenPage, setCurrenPage] = React.useState(1)
const PAGE_SIZE = 12;
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
  React.useEffect(() => {
    dispatch(getListProductApi());
  }, []);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const handleChangeUI = () => {
    setChangeUI(!changeUI);
  };
  
function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, []);

  return null;
}
  const totalResult = listProductApi.length;
  
  const renderListProduct = () => {
    console.log("list", listProductApi);
    return listProductApi
    .map((item, index) => {
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
    })
    .splice((currenPage - 1) * PAGE_SIZE)
    .splice(0,PAGE_SIZE)
  
  };

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
            <Option value='Rating'>Best Seller </Option>
            <Option value='Rating'>Hot&New </Option>
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
        <div>Showing {PAGE_SIZE} of {totalResult} results</div>
      </div>

      <div>
        <Row gutter={16} className='product__list'>
          {renderListProduct()}
        </Row>
      </div>
      <div className='shopitem__pagi'>
        <Pagination 
         pageSize={PAGE_SIZE}
        current={currenPage} 
        total={listProductApi.length} 
         onChange={(page)=> {{setCurrenPage(page)}}} 
         />
      </div>
    </div>
  );
};
export default ShopItem;