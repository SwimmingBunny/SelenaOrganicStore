/** @format */

import * as React from "react";
import ProductList from "./ProductList";
import { useDispatch, useSelector } from "react-redux";
import { Row, Select, Pagination, Menu } from "antd";
import { useMediaQuery } from "react-responsive";
import ScrollToTop from "../../../component/commont/ScrollToTop";
import { useEffect } from "react";
import ProductItem from "../../../component/commont/ProductsItem";
import {
  getListProductApi,
  setSort,
  setCurrentPage,
  filterType,
  setSortPrice,
} from "../../../redux/reducers/productSlice";
import $ from "jquery";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faColumns, faWindowMaximize } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faColumns, faWindowMaximize);

const ShopItem = () => {
  const { currentPage } = useSelector((state) => state.listProduct);
  console.log(currentPage, "alo alo");
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
  const { listProductApi } = useSelector((state) => state.listProduct);

  React.useEffect(() => {
    dispatch(getListProductApi());
  }, []);

  function handleChange(value) {
    dispatch(setSort(value));
  }
  const handleChangeUI = () => {
    setChangeUI(!changeUI);
  };

  const totalResult = listProductApi.length;

  const renderListProduct = () => {
    return listProductApi
      .map((item, index) => {
        return <ProductItem key={index} layout={changeUI} {...item} />;
      })
      .splice((currentPage - 1) * PAGE_SIZE)
      .splice(0, PAGE_SIZE);
  };
  const renderProduct = () => {
    return listProductApi
      .map((item, index) => {
        return <ProductList key={index} layout={changeUI} {...item} />;
      })
      .splice((currentPage - 1) * PAGE_SIZE)
      .splice(0, PAGE_SIZE);
  };

  return (
    <>
      <div className="shopitem">
        <div className="shopitem__sortitem">
          <div style={{ margin: "1rem " }}>
            <span className="shopitem__sortitem-sort--span">Sort By:</span>
            <Select
              defaultValue="All"
              style={{ width: 120 }}
              onChange={handleChange}
              className="shopitem__sort-select"
            >
              <Option value="All">All</Option>
              <Option value="NameA">Name (A-Z) </Option>
              <Option value="NameZ">Name (Z-A) </Option>
              <Option value="PriceA">Price (Low - Hight) </Option>
              <Option value="PriceZ">Price (Hight - Low) </Option>
              <Option value="RatingA">Rating (Low - Hight) </Option>
              <Option value="RatingZ">Rating (Hight - Low) </Option>
            </Select>
          </div>
        </div>
        <div className="shopitem__sortitem-sort">
          <div className="shopitem__sortitem-layout">
            {changeUI ? (
              <button
                type="primary"
                onClick={handleChangeUI}
                className="shopitem__sortitem-layout--btn"
              >
                <FontAwesomeIcon icon="window-maximize" />
              </button>
            ) : (
              <button
                type="primary"
                onClick={handleChangeUI}
                className="shopitem__sortitem-layout--btn"
              >
                <FontAwesomeIcon icon="columns" />
              </button>
            )}
          </div>
          <div>Showing {totalResult} results</div>
        </div>

        <div>
          <Row className="product__list">
            {changeUI ? <>{renderListProduct()} </> : <> {renderProduct()} </>}
          </Row>
        </div>
        <div className="shopitem__pagi">
          <Pagination
            pageSize={PAGE_SIZE}
            current={currentPage}
            total={listProductApi.length}
            onChange={(page) => {
              dispatch(setCurrentPage(page));
              window.scrollTo(0, 200);
            }}
          />
        </div>
      </div>
    </>
  );
};
export default ShopItem;
