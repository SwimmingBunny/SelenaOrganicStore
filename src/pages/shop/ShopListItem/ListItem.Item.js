import * as React from "react";
import {useDispatch} from "react-redux";
import { Row, Select, Pagination } from "antd";
import { useMediaQuery } from "react-responsive";

import ProductItem from "../../../component/commont/ProductsItem";
import { listProductApi } from '../../../redux/reducers/productSlice'

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
    if ($(window).scrollTop() > 687 && isMoblie === true) {
      $(".shopitem__sortitem").addClass("subfixed");
    } else {
      $(".shopitem__sortitem").removeClass("subfixed");
    }
  });

  const { Option } = Select;
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(listProductApi())
  }, [])
  const [changeUI, setChangeUI] = React.useState(true);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const handleChangeUI = () => {
    setChangeUI(!changeUI);
  };
  return (
    <div className="shopitem">
      <div className="shopitem__sortitem">
        <div style={{ margin: "1rem " }}>
          <span className="shopitem__sortitem-sort--span">Sort By:</span>
          <Select
            defaultValue="Revelence"
            style={{ width: 120 }}
            onChange={handleChange}
            className="shopitem__sort-select"
          >
            <Option value="Revelence">Revelence</Option>
            <Option value="Name">Name (A-Z)</Option>
            <Option value="Rating">Rating </Option>
            <Option value="Rating">Best Seller </Option>
            <Option value="Rating">Hot&New </Option>
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
        <div>Showing 1-12 of 32 results</div>
      </div>

      <div>
        <Row gutter={16} className="product__list">
          <ProductItem
            img="Images/product/product-10.jpg"
            name="Carrot"
            price="2$"
            sell="5$"
            layout={changeUI}
          />{" "}
          <ProductItem
            img="Images/product/product-10.jpg"
            name="Carrot"
            price="2$"
            sell="5$"
            layout={changeUI}
          />{" "}
          <ProductItem
            img="Images/product/product-10.jpg"
            name="Carrot"
            price="2$"
            sell="5$"
            layout={changeUI}
          />{" "}
          <ProductItem
            img="Images/product/product-10.jpg"
            name="Carrot"
            price="2$"
            sell="5$"
            layout={changeUI}
          />{" "}
          <ProductItem
            img="Images/product/product-10.jpg"
            name="Carrot"
            price="2$"
            sell="5$"
            layout={changeUI}
          />
        </Row>
      </div>
      <div className="shopitem__pagi">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </div>
  );
};
export default ShopItem;
