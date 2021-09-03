import React from "react";
import {Form, Button, Radio, Input, Space, DatePicker } from "antd";



import validateMessages from "../form/ValidateMessage";
import FormItem from "antd/lib/form/FormItem";
import "../../style/form.scss";

const AccountUser = () =>{
    const [form] = Form.useForm();
    const [value, setValue] = React.useState(1);
  
   
    const onChange = (e) => {
      console.log("radio checked", e.target.value);
      setValue(e.target.value);
    };
    return(
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
          label='Phone'
          name='phone'
          rules={[
            {
              required: true,
              message: "Please input your PhoneNumber",
            },
          ]}>
          <Input
            className='form__group--input form__group--backgroundColor'
            placeholder='PhoneNumber'
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
        <FormItem label='Gender'>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Male</Radio>
            <Radio value={2}>Female</Radio>
          </Radio.Group>
        </FormItem>
        <Form.Item className="form__btn--center">
            <Button type='primary' htmlType="submit" size='large' className='form__btn '>
              SAVE CHANGE
            </Button>
        </Form.Item>
      </Form>
    )
}

export default AccountUser;