/** @format */

import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "../../../style/form.scss";
import "../../../style/base.scss";

const Login = () => {
  return (
    <div className='form container'>
      <div className='form__group'>
        <h1>Sign In</h1>
        <Form name='basic' initialValues={{ remember: true }}>
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
    </div>
  );
};

export default Login;