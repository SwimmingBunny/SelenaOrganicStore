/** @format */

import React, { useState } from "react";
import { Row, Col } from "antd";
import { Form, Input, Button, Checkbox } from "antd";

import { useDispatch } from "react-redux";
import { addUser } from "../../../redux/reducers/userRegisterSlice";

import validateMessages from "../ValidateMessage";
import "../../../style/form.scss";

const Register = () => {
  const [form] = Form.useForm();
  const [formValue, setFormValue] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    registeruser: "",
  });

  const dispatch = useDispatch();
  const handleRegister = () => {
    console.log('form sbm', {formValue})
    const action = addUser({formValue});
    dispatch(action);
    console.log('action',action)
  };

  const handelOnChange = (e) => {
    if (e.target) {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
      console.log(e.target.value);
    } else {
      setFormValue({ ...formValue, deadline: e });
    }
  };

  return (
    <div className='container'>
      <Row gutter={[16]}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <div className='form__group'>
            <h1>Sign Up</h1>
            <Form
              form={form}
              name='basic'
              initialValues={{ remember: true }}
              validateMessages={validateMessages}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your Full Name",
                  },
                ]}>
                <Input
                  className='form__group--input'
                  placeholder='Full Name'
                  name='fullname'
                  onChange={(e) => handelOnChange(e)}
                  value={formValue.fullname}
                />
              </Form.Item>
              <Form.Item>
                <Input
                  className='form__group--input'
                  placeholder='Enter your Email'
                  name='email'
                  onChange={(e) => handelOnChange(e)}
                  value={formValue.email}
                />
              </Form.Item>
              <Form.Item
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}>
                <Input.Password
                  className='form__group--input'
                  placeholder='Enter your Password'
                  name='password'
                  onChange={(e) => handelOnChange(e)}
                  value={formValue.password}
                />
              </Form.Item>
              <Form.Item
                rules={[
                  { required: true, message: "Please Repeat your password!" },
                ]}>
                <Input.Password
                  className='form__group--input'
                  placeholder='Repeat your Password'
                  name='confirmPassword'
                  onChange={(e) => handelOnChange(e)}
                  value={formValue.confirmPassword}
                />
              </Form.Item>
              <Form.Item name='registeruser' valuePropName='checked'>
                <Checkbox>Subscribe Our Newsletter</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='form__btn'
                  onClick={handleRegister}>
                  REGISTER
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src='Images/banner/best-sellers.png'
          />
        </Col>
      </Row>
    </div>
  );
};

export default Register;
