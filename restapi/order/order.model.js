const sql = require('../db_connection');

const Order = function(order) {
    this.date = new Date();
    this.status = order.status;
    this.total = order.total;
    this.customer_id = order.customer_id;
    this.cart = order.cart;
  };
  const Order_detail = function(orderDetail) {
    this.quantity = orderDetail.quantity;
    this.order_id = orderDetail.order_id;
    this.product_id = orderDetail.product_id;
    this.order_id = orderDetail.order_id;
  };

  const saveOrder = async (order) => {
    let orderSave = { ...order };
    delete orderSave.cart;
    return new Promise((resolve, reject) => {
        sql.query(`INSERT INTO orders SET ?`, orderSave, (error, results) => {
            if (error) {
                console.log('select order error')   ;  
                return reject(error);
            }
            return resolve({ id: results.insertId, ...orderSave });
        });
    });
    };

    const saveOrderDetail = async (newOrderDetail) => {
        return new Promise((resolve, reject) => {
            sql.query(`INSERT INTO order_detail (product_id , quantity , order_id ) VALUES ?`, [newOrderDetail] , (error, results) => {
                if (error) {
                    console.log('save order detail error')   ;                 
                    return reject(error);
                }
                return resolve({success: true});
                // return resolve(results);
                
              });
            });
        
    };
    const getOrderDetailByOrderId = (orderId) => {
        return new Promise((resolve, reject) => {
            sql.query(`SELECT * FROM order_detail where order_id = ${orderId}`,  (error, results) => {
                if (error) {
                    return reject(error);
                }
                return resolve(results);
            });
            
        });
    };
  Order.create = async (order, result) => {
    const newOrder = await saveOrder(order);
    
    const listOrderDetail = order.cart ;    
    let newOrderDetail = [] ;

    for ( const orderDetail of listOrderDetail) {
        let detail = [] ;
        detail.push(orderDetail.product_id)
        detail.push(orderDetail.quantity)
        detail.push(newOrder.id)
        // orderDetail.order_id = newOrder.id ;
        newOrderDetail.push(detail)

    };
    const orderDetailStatus = await saveOrderDetail (newOrderDetail);
    
    let  orderDetail = [];
    if (orderDetailStatus.success) {
        orderDetail = await getOrderDetailByOrderId(newOrder.id);
    };
    result({id: newOrder.id, orderDetail}) ;
    
  };

  Order.findById = (order_id, result) => {
    sql.query(`SELECT * FROM order_detail WHERE order_id = ${order_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      };
  
      if (res.length) {
        console.log("found order: ", res);
        result(null, res);
        return;
      };
      // not found comment with the id
      result({ kind: "not_found" }, null);
    });
  };
  
  Order.getAll = result => {
    sql.query("SELECT * FROM orders", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("order: ", res);
      result(null, res);
    });
  };
  
//   Comment.updateById = (id, comment, result) => {
//     sql.query(
//       "UPDATE comments SET rating = ?, content = ?, date = ? WHERE id = ?",
//       [comment.rating, comment.content, comment.date, id],
//       (err, res) => {
//         if (err) {
//           console.log("error: ", err);
//           result(null, err);
//           return;
//         }
  
//         if (res.affectedRows === 0) {
//           // not found Customer with the id
//           result({ kind: "not_found" }, null);
//           return;
//         }
  
//         console.log("updated comment: ", { id: id, ...comment });
//         result(null, { id: id, ...comment });
//       }
//     );
//   };
  
//   Comment.remove = (id, result) => {
//     sql.query("DELETE FROM comments WHERE id = ?", id, (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }
  
//       if (res.affectedRows === 0) {
//         // not found Customer with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }
  
//       console.log("deleted comment with id: ", id);
//       result(null, res);
//     });
//   };
  
  module.exports = Order;