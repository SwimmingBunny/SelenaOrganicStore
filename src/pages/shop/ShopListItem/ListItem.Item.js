import React from "react";
import { Row, Select, Pagination } from "antd";
import ProductItem from "../../../component/commont/ProductsItem";
const ShopItem = () => {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <div className="shopitem">
      <div className="shopitem__sortitem">
        <div className="shopitem__sortitem-sort">
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
          </Select>
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
          />
          <ProductItem
            img="Images/product/product-5.jpg"
            name="Spinach"
            price="30$"
          />{" "}
          <ProductItem
            img="Images/product/product-5.jpg"
            name="Spinach"
            price="30$"
          />{" "}
          <ProductItem
            img="Images/product/product-5.jpg"
            name="Spinach"
            price="30$"
          />
          <ProductItem
            img="Images/product/product-5.jpg"
            name="Spinach"
            price="30$"
          />
          <ProductItem
            img="Images/product/product-5.jpg"
            name="Spinach"
            price="30$"
          />
          <ProductItem
            img="Images/product/product-5.jpg"
            name="Spinach"
            price="30$"
          />
          <ProductItem
            img="Images/product/product-5.jpg"
            name="Spinach"
            price="30$"
          />
          <ProductItem
            img="Images/product/product-5.jpg"
            name="Spinach"
            price="30$"
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
