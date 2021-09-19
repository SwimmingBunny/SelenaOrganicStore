/** @format */

import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Select, Pagination } from "antd";
import { useMediaQuery } from "react-responsive";
import ScrollToTop from '../../../component/commont/ScrollToTop'
import { useEffect } from "react";
import ProductItem from "../../../component/commont/ProductsItem";
import { getListProductApi, setSortName } from "../../../redux/reducers/productSlice";
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
  const {listProductApi} = useSelector(
    (state) => state.listProduct
  );


  React.useEffect(() => {
    dispatch(getListProductApi());
  }, []);

  function handleChange(value) {
    dispatch(setSortName(value))
  }
  const handleChangeUI = () => {
    setChangeUI(!changeUI);
  };
  

  const totalResult = listProductApi.length;
  
  const renderListProduct = () => {
    return listProductApi
    .map((item, index) => {
      return (
        <ProductItem
          key={index}
          {...item}
        />
      );
    })
    .splice((currenPage - 1) * PAGE_SIZE)
    .splice(0,PAGE_SIZE)
  
  };
  return (
    <div className='shopitem'>
      <div className='shopitem__sortitem'>
        <div style={{ margin: "1rem " }}>
          <span className='shopitem__sortitem-sort--span'>Sort By:</span>
          <Select
            defaultValue='All'
            style={{ width: 120 }}
            onChange={handleChange}
            className='shopitem__sort-select'>
            <Option value='All'>All</Option>
            <Option value='Name'>Name (A-Z) </Option>
            <Option value='Rating'>Rating </Option>
          </Select>
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