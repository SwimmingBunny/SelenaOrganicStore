import React from 'react'
import {
   EditFilled,
   DeleteOutlined

  } from "@ant-design/icons";
const AdminRow = ()=> {
    return (
        <tr >
          <td>1</td>
          <td>Nguyễn Tam Long</td>
          <td>3long@gmail.com</td>
          <td>**********</td>
          <td className='icon'>< EditFilled/></td>
          <td  className='icon'><DeleteOutlined /></td>
        </tr>
      );
};
export default AdminRow;