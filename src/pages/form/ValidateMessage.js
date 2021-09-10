import React from 'react';


const validateMessages = {
    required: 'Please input your ${name}',
    types: {
      name:'Full Name is not a valid Full Name',
      email: 'Email is not a valid email!',
      number: '${label} is not a valid number!',
      streetaddress: 'Street Address is not a valid Street Address!'
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

export default validateMessages;