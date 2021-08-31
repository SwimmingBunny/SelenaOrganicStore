/** @format */

import React from "react";
import { Row, Col, Form, Button, Radio, Input, Space } from "antd";
import validateMessages from "../form/ValidateMessage";

import "../../style/checkout.scss";
import "../../style/form.scss";
import "../../style/aboutus.scss"
const Checkout = (props) => {
  const [form] = Form.useForm();
  const [valueForm, setValueForm] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValueForm(e.target.value);
  };

  const handleSbm = () => {
    alert("success!")
  };

  const totallproduct = () => {
    return 1 + 2;
  };

  return (
    <>
      <div className="aboutus__header">
        <h1 className="aboutus__header-h1">Shop</h1>
        <h3 className="aboutus__header-h3">Checkout</h3>
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
                  <th>Products</th>
                  <th>Total</th>
                </tr>
                <tr>
                  <td>
                    {props.name} x {props.count}
                  </td>
                  <td>{totallproduct()}</td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>$0</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td>$30.00</td>
                </tr>
                <tr>
                  <td>Counpon</td>
                  <td>None</td>
                </tr>
                <tr>
                  <th>Total Amount</th>
                  <th>$30.00</th>
                </tr>
              </table>
              <div className='checkout__order--padding'>
                <Radio.Group
                  onChange={onChange}
                  value={valueForm}
                  className='checkout__order--radio'>
                  <Space direction='vertical'>
                    <Radio value={1}>Payment on delivery</Radio>
                    <Radio value={2}>Direct Bank Transfer</Radio>
                    <Radio value={3}>
                      Paypal
                      <li>
                        <img src='Images/payment.png' />
                      </li>
                    </Radio>
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
