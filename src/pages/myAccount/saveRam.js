// const idOder = item.order_id;
//       const idProduct = item.product_id;
//       const totalOderId = listOrderApi.filter((item) => {
//         return item.id === idOder;
//       });
      
//       const infoProduct = listProductApi.filter((item) => {
//         return item.id === idProduct;
//       });
//       const statusOrder = totalOderId.map((item) => {
//         return (
//           <>
//             <td>{item.status}</td>
//           </>
//         );
//       });
//       const infoItemProduct = infoProduct.map((item) => {
//         return (
//           <>
//             <td>{item.name}</td>
//             <td>{item.price}</td>
//           </>
//         );
//       });
//       return (
//         <tr>
//           <td>{item.id}</td>
//           {infoItemProduct}
//           <td>{item.quantity}</td>
//           {statusOrder}
//           <td>{moment(item.date).format("DD-MM-YYYY")}</td>
//           <td className='icon'>
//             <DeleteOutlined />
//           </td>
//         </tr>
//       );
//     });