/** @format */

import React from "react";
import { Row, Col } from 'antd';
import { Form, Input, Button, Checkbox } from "antd";
import "../../../style/form.scss";
import "../../../style/base.scss";

const Login = () => {
  const [form] = Form.useForm();


  return (
    <div className='form container'>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 12}} lg={{ span: 12}}>
          <img style={{width:'100%',height:'41rem'}} src="Images/banner/best-sellers.png"/>
        </Col>
        <Col xs={{ span: 12 }} lg={{ span: 12}}>
        <div className='form__group'>
        <h1>Sign In</h1>
        <Form name='basic' initialValues={{ remember: true }} Form={form}>
          <Form.Item
            name='username'
            rules={[
              {
                required: true,
                message: "Please input your username or email!",
              },
            ]}>
            <Input
              className='form__group--input'
              placeholder='Username or Email'
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
          <div className="form__group--subform">
                <Form.Item name='remember' valuePropName='checked'>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Form.Item>
                    <a>Forgot password?</a>
                </Form.Item>
          </div>
          <Form.Item>
            <Button type='primary' htmlType='submit' className='form__btn'>
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
        </Col>
      </Row>
      
    </div>
  );
};

export default Login;
