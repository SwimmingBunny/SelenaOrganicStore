/** @format */

import React from "react";
import { Row, Col, Form, Button, Radio, Input, Space } from "antd";
import validateMessages from "../form/ValidateMessage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import "../../style/checkout.scss";
import "../../style/form.scss";
import "../../style/aboutus.scss"
import { getListProductApi } from "../../redux/reducers/productSlice";
const Checkout = (props) => {
  const [form] = Form.useForm();
  const [isShow, setIsShow] = React.useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListProductApi())
  }, [])

  const {cart}= useSelector(state => state.listProduct)

  const onChange = (e) => {
    if(e.target.value === 2){
      setIsShow(false)
    }
    if(e.target.value === 1){
      setIsShow(true)
    }
  };

  const handleSbm = () => {
    alert("success!")
    let total = 10; //10 ship
    const discount = 50;

    const cartApi = cart.map((vl)=>{
      total = total + vl.total;

      return {
        product: {
          id: vl.id,
          name: vl.name,
          price: vl.price
        },
        quantity: vl.count
      }
    });
    const request = {
      cart : cartApi,total,discount
    }
  };

  const getTotal = ()=>{
    let total = 0;
    cart.forEach(element => {
      return total += element.total;

    });
    return total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  }

  return (
    <>
      <div className="aboutUs__header">
        <h1 className="aboutUs__header-h1">Shop</h1>
        <h3 className="aboutUs__header-h3">Checkout</h3>
      </div>
      <div className='container'>
        <Row gutter={20} className='checkout'>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <h2 className='checkout--borderbot'>Billing Details</h2>
            <div className='checkout__info'>
              <Form
                Form={form}
                name='basic'
                initialValues={{ remember: true }}
                validateMessages={validateMessages}>
                <Form.Item
                  label='Full name'
                  name='fullname'
                  rules={[
                    {
                      required: true,
                      message: "Please input your Full Name",
                    },
                  ]}>
                  <Input
                    className='form__group--input form__group--backgroundColor'
                    placeholder='Full Name'
                  />
                </Form.Item>
                <Form.Item
                  label='Email Address'
                  name={"email"}
                  rules={[{ required: true, type: "email" }]}>
                  <Input
                    className='form__group--input form__group--backgroundColor'
                    placeholder='Enter your Email'
                  />
                </Form.Item>
                <Form.Item
                  label='Street Address'
                  name='streetaddress'
                  rules={[
                    {
                      required: true,
                      type: "streetaddress",
                    },
                  ]}>
                  <Input
                    className='form__group--input form__group--backgroundColor'
                    placeholder=' Street Address'
                  />
                </Form.Item>
                <Form.Item
                  label='Town / City'
                  name='town'
                  rules={[
                    {
                      required: true,
                      message: "Please input your Full Name",
                    },
                  ]}>
                  <Input
                    className='form__group--input form__group--backgroundColor'
                    placeholder='Town / City'
                  />
                </Form.Item>
                <Form.Item
                  label='State / Divition'
                  name='state'
                  rules={[
                    {
                      required: true,
                      message: "Please input your Full Name",
                    },
                  ]}>
                  <Input
                    className='form__group--input form__group--backgroundColor'
                    placeholder='State / Divition'
                  />
                </Form.Item>
                <Form.Item
                  label='Note'
                  name='state'
                  rules={[
                    {
                      required: true,
                      message: "Please input your Full Name",
                    },
                  ]}>
                  <Input.TextArea
                    className='form__group--input form__group--backgroundColor'
                    placeholder='Note'
                  />
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 12 }}>
            <h2 className='checkout--borderbot'>Your Order Summary</h2>
            <div className='checkout__order'>
              <table>
                <tr>
                  <td>Sub Total</td>
                  <td>${getTotal()}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>$10.00</td>
                </tr>
                <tr>
                  <td>Counpon</td>
                  <td>None</td>
                </tr>
                <tr>
                  <th>Total Amount</th>
                  <th>${+getTotal() + 10}.00</th>
                </tr>
              </table>
              <div className='checkout__order--padding'>
                <Radio.Group
                  onChange={onChange}
                  className='checkout__order--radio'>
                  <Space direction='vertical'>
                    <Radio value={1}>Payment on delivery</Radio>
                    <Radio value={2}>Momo</Radio>
                    <ul style = {{ display:`${isShow ? "none" : "block"}`}}>
                      <img style={{width:"40%"}}src='Images/payment/payment.jpg'/>
                    </ul>
                  </Space>
                </Radio.Group>{" "}
                <br />
                <div className='checkout__order--center checkout__order--padding'>
                  <Form.Item>
                    <Button type='primary' size='large' className='form__btn' onClick={ handleSbm }>
                      PLACE ORDER
                    </Button>
                  </Form.Item>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Checkout;
