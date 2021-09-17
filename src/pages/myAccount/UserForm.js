import React from "react";
import {Form, Button, Radio, Input, Space, DatePicker } from "antd";



import validateMessages from "../form/ValidateMessage";
import FormItem from "antd/lib/form/FormItem";
import "../../style/form.scss";

const AccountUser = () =>{
    const [form] = Form.useForm();
    const [formValue, setFormValue] = React.useState({
      fullName: "",
      email: "",
      streetAddress: "",
      town: "",
      phone:"",
      gender: ''
    });
    const handelOnChange = (e) => {
      if (e.target) {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
        console.log(e.target.value);
      } else {
        setFormValue({ ...formValue});
      }
    };
    return(
        <Form
        Form={form}
        name='basic'
        initialValues={{ remember: true }}
        validateMessages={validateMessages}>
        <Form.Item
          label='Full name'
          name='fullName'
          rules={[
            {
              required: true,
              message: "Please input your Full Name",
            },
          ]}>
          <Input
            onChange={(e)=>handelOnChange(e)}
            value={formValue.fullName}
            className='form__group--input form__group--backgroundColor'
            placeholder='Full Name'
          />
        </Form.Item>
        <Form.Item
          label='Phone'
          type = 'number'
          name='phone'
          rules={[
            {
              required: true,
              message: "Please input your PhoneNumber",
            },
          ]}>
          <Input
            onChange={(e)=>handelOnChange(e)}
            value={formValue.phone}
            className='form__group--input form__group--backgroundColor'
            placeholder='PhoneNumber'
          />
        </Form.Item>
        <Form.Item
          label='Email Address'
          name={"email"}
          rules={[{ required: true, type: "email" }]}>
          <Input
            onChange={(e)=>handelOnChange(e)}
            value={formValue.email}
            className='form__group--input form__group--backgroundColor'
            placeholder='Enter your Email'
          />
        </Form.Item>
        <Form.Item
          label='Street Address'
          name='streetAddress'
          rules={[
            {
              required: true
            },
          ]}>
          <Input
            onChange={(e)=>handelOnChange(e)}
            value={formValue.streetAddress}
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
              message: "Please input your Town / City",
            },
          ]}>
          <Input
            onChange={(e)=>handelOnChange(e)}
            value={formValue.town}
            className='form__group--input form__group--backgroundColor'
            placeholder='Town / City'
          />
        </Form.Item>
        <Form.Item
          label='Country'
          name='country'
          rules={[
            {
              required: true,
              message: "Please input your Country",
            },
          ]}>
          <Input
            onChange={(e)=>handelOnChange(e)}
            value={formValue.country}
            className='form__group--input form__group--backgroundColor'
            placeholder='Country'
          />
        </Form.Item>
        <FormItem label='Gender'>
          <Radio.Group name="gender" onChange={(e)=>handelOnChange(e)} value={formValue.gender}>
            <Radio value={1}>Male</Radio>
            <Radio value={2}>Female</Radio>
          </Radio.Group>
        </FormItem>
        <Form.Item className="form__btn--center">
            <Button type='primary' htmlType="submit" size='large' className='form__btn'>
              SAVE CHANGE
            </Button>
        </Form.Item>
      </Form>
    )
}

export default AccountUser;