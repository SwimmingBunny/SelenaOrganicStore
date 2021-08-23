import React from 'react';


const validateMessages = {
    required: 'Please input your ${name}',
    types: {
      name:'Full Name is not a valid Full Name',
      email: 'Email is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

export default validateMessages;