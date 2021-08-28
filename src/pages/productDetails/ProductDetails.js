/** @format */

import React from "react";

import { Row, Col, Popover, Rate, Button, Tabs, Space, Input, Form } from "antd";
import { HeartOutlined } from "@ant-design/icons";

import "../../style/ProductDetails.scss";
import "../../style/form.scss";
import "../../style/base.scss";
import ProductItem from "../../component/commont/ProductsItem";


const ProductDetail = () => {
  const [tabPosition, setTabPosition] = React.useState('left');
  const [date, setDate] = React.useState(new Date().getDate())
  const [rate, setRate] = React.useState('');
  const { TabPane } = Tabs;
  
  const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  const handleChange = (value) => {
    setRate(value);
  };

  return (
    <div className='container detail'>
      <Row className='detail__top'>
        <Col lg={{ span: 8 }} className='detail__img'>
            <img
              className='detail__img--size'
              src='Images/product/vegetables/Broccoli-each.jpg'></img>
        </Col>
        <Col lg={{ span: 16 }} className='detail__info'>
          <div style={{paddingLeft:'8rem'}}>
            <Rate />
            <h2>Broccoli</h2>
            <div></div>
            <h2 className='detail__info--price'>$160.00</h2>
            <p className='detail__info--descrip'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla augue nec est tristique auctor. Donec non est at libero
              vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
              Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
              nulla.
            </p>
            <Button className='form__btn detail__info--cart' size='large'>
              ADD TO CART
            </Button>
            <Button className='detail__info--heart' size='large'>
              <HeartOutlined />
            </Button>
            <p>Availability: ? In Stock</p>
          </div>
        </Col>
      </Row>
      <Row className='detail__middle'>
        <Space style={{ marginBottom: 24 }}>
        </Space>
        <Tabs tabPosition={tabPosition}>
          <TabPane tab='Description' key='1' className='detail__middle--boder'>
            <p className='detail__info--descrip'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    fringilla augue nec est tristique auctor. Donec non est at libero
                    vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
                    Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
                    nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    fringilla augue nec est tristique auctor. Donec non est at libero
                    vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
                    Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
                    nulla.
                </p>
          </TabPane>
          <TabPane tab='Reviews' key='2' className='detail__middle--boder detail__middle__review'>
            <h2 > 1 Review For Admin</h2>
            <div>
              <div className='detail--flex'>
                <img className='detail__middle__review--avt' src='Images/product/product-1.jpg' alt='avatar' />
                <div className='detail__middle__review--info'>
                <h3>Admin</h3>
                  <Rate />
                  <p>{date}</p>
                  <p className='detail__info--descrip'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    fringilla augue nec est tristique auctor. Donec non est at libero
                    vulputate rutrum.
                  </p>
                </div>
              </div>

              <div className='detail__middle__review--sb'>
                <Input placeholder="Enter review product..." />
                  <Rate  className='detail__middle__review--sb--rate' tooltips={desc} onChange={handleChange} value={rate} />
                  {rate ? <span className="ant-rate-text">{desc[rate - 1]}</span> : ''}<br/>
                <Button className='form__btn detail__info--cart' size='large'>
                  Comment
                </Button>
              </div>
            </div>
          </TabPane>
        </Tabs>
      </Row>
      <Row className='detail__bottom'>
          <h1 className='detail__bottom--related'>Related Product</h1>
          <div className='detail__bottom--boder'></div>
        <Row>
          <ProductItem img="Images/product/product-10.jpg"
            name="Carrot"
            price="2$"
            sell="5$"/>
          <ProductItem img="Images/product/product-10.jpg"
            name="Carrot"
            price="2$"
            sell="5$"/>
            <ProductItem img="Images/product/product-10.jpg"
            name="Carrot"
            price="2$"
            sell="5$"/>
        </Row>
        
      </Row>
    </div>
  );
};

export default ProductDetail;
