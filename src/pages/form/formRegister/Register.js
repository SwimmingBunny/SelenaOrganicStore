/** @format */

import React from "react";
import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox } from "antd";

import validateMessages from "../ValidateMessage";

import "../../../style/form.scss";

const Register = () => {
  
  return (
    <div className='container'>
      <Row gutter={[16]}>
        <Col xs={{ span: 12}} lg={{ span: 12}}>
          <img style={{width:'100%', height:'54.2rem'}} src="Images/banner/best-sellers.png"/>
        </Col>
        <Col xs={{ span: 12}} lg={{ span: 12}}>
          <div className='form__group'>
          <h1>Sign Up</h1>
          <Form name='basic' initialValues={{ remember: true }} validateMessages={validateMessages}>
            <Form.Item
              name='fullname'
              rules={[
                {
                  required: true,
                  message: "Please input your Full Name",
                },
              ]}>
              <Input className='form__group--input' placeholder='Full Name' />
            </Form.Item>
            <Form.Item name={"email"}rules={[{required: true, type: "email" }]}>
              <Input
                className='form__group--input'
                placeholder='Enter your Email'
              />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[
                { required: true, message: "Please input your password!" },
              ]}>
              <Input.Password
                className='form__group--input'
                placeholder='Enter your Password'
              />
            </Form.Item>
            <Form.Item
              name='repeatPassword'
              rules={[
                { required: true, message: "Please Repeat your password!" },
              ]}>
              <Input.Password
                className='form__group--input'
                placeholder='Repeat your Password'
              />
            </Form.Item>
            <Form.Item name='registeruser' valuePropName='checked'>
              <Checkbox>Subscribe Our Newsletter</Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type='primary' htmlType='submit' className='form__btn'>
                REGISTER
              </Button>
            </Form.Item>
          </Form>
        </div>
        </Col>
      </Row>
        
      
    </div>
  );
};

export default Register;
