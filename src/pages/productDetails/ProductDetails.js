/** @format */
import React from "react";
import { useMediaQuery } from "react-responsive";
import Modal from "../../component/Modal/Modal.js";
import {
  Row,
  Col,
  Popover,
  Rate,
  Button,
  Tabs,
  Space,
  Input,
  Form,
  Comment, Tooltip, List 
} from "antd";
import { HeartOutlined } from "@ant-design/icons";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

import "../../style/ProductDetails.scss";
import "../../style/form.scss";
import "../../style/base.scss";
import ProductItem from "../../component/commont/ProductsItem";
import { NavLink, useParams } from "react-router-dom";
import { ROUTE } from "../../constant/router";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  getListProductApi,
  editCartItem,
} from "../../redux/reducers/productSlice";
import moment from 'moment';
import { addComment, addCommentApi, getListCommentApi } from "../../redux/reducers/commentSlice.js";
const ProductDetail = (props) => {
  // Tên Biến
  const [isShowCart, setIsShowCart] = React.useState(true);
  const [isShowWishlist, setisShowWishlist] = React.useState(true);
  const [itemDetail, setItemDetail] = React.useState();
  const [contentVl, setContentVl] = React.useState("")
  const [rate, setRate] = React.useState("");
  const [countPD, setCountPD] = React.useState(1);
  const list = JSON.parse(localStorage.getItem('inforUser'));

  const isMoblie = useMediaQuery({
    query: "(max-width: 480px)",
  });
  const dispatch = useDispatch();
  const { listProductApi } = useSelector((state) => state.listProduct);

  const { TabPane } = Tabs;
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [check, setCheck] = React.useState(true);
  const [checkStock, setCheckStock] = React.useState(true);
  const countStyle = {
    minWidth: "3.7rem",
    textAlign: "center",
    transform: "translateY(-.4rem)",
    padding: "0 1rem",
  };
  const btnStyle = {
    border: "none",
  };
  const borderStyle = {
    border: "1px solid #e5e5e5",
    margin: "0 1rem",
    padding: ".5rem 0",
    maxWidth: "10rem",
    display: "flex",
    justifyContent: "space-between",
    maxHeight: "3.4rem",
  };
  const Plus = () => {
    if (countPD === 1) {
      setCheck(true);
    }
    setCountPD(countPD + 1);
    if (countPD >= itemDetail.stock - 1) {
      setCheckStock(false);
    } else {
      dispatch(editCartItem({ ...itemDetail, count: countPD + 1 }));
    }
  };
  const Minus = () => {
    if (countPD === 1) {
      setCheck(!check);
    }
    if (countPD > 1) {
      setCheck(true);
      setCountPD(countPD - 1);
      setCheckStock(true);
      dispatch(editCartItem({ ...itemDetail, count: countPD - 1 }));
    }
  };
  let { id } = useParams();
  React.useEffect(() => {
    dispatch(getListProductApi()) && dispatch(getListCommentApi())
  }, []);
  React.useEffect(() => {
    const d = listProductApi.find((item) => item.id === +id); //find e in arr
    setItemDetail(d);
  }, [listProductApi, id]);
  const handleChange = (value) => {
    setRate(value);
  };

  const handleAddCart = () => {
    dispatch(
      addToCart({
        ...itemDetail,
        total: itemDetail.price,
        count: countPD,
      })
    );
    setIsShowCart(false);
  };

  const handleAddWishlist = () => {
    dispatch(addToWishlist({ ...itemDetail }));
    setisShowWishlist(false);
  };
  React.useEffect(() => {
    window.scrollTo(0, 50);
  }, []);
  const handleIsShow = () => {
    setIsShowCart(true);
  };
  const handleIsShowWishlist = () => {
    setisShowWishlist(true);
  };

  const handelComment = (product_id) =>{
    dispatch(addCommentApi({contentVl,rate,product_id,customer_id:list.id }))
  }
  const data = [
    {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: (
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully and
          efficiently.
        </p>
      ),
      datetime: (
        <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment().subtract(1, 'days').fromNow()}</span>
        </Tooltip>
      ),
    },
  ];

  return (
    <>
      <div className='container detail'>
        <Row className='detail__top'>
          <Col lg={{ span: 8 }} className='detail__img'>
            <img
              className='detail__img--size'
              src={`http://localhost:3000/${itemDetail?.img}`}
            />
          </Col>
          <Col lg={{ span: 16 }} className='detail__info'>
            <div style={{ paddingLeft: isMoblie ? "2rem" : "8rem" }}>
              <Rate value={itemDetail?.rating} />
              <h2>{itemDetail?.name}</h2>
              <div></div>
              <h2 className='detail__info--price'>$ {itemDetail?.price}.00</h2>
              <p className='detail__info--descrip'>{itemDetail?.description}</p>
              <Button
                className='form__btn detail__info--cart'
                size='large'
                onClick={handleAddCart}>
                ADD TO CART
              </Button>

              <Button
                className='detail__info--heart'
                size='large'
                onClick={handleAddWishlist}>
                <HeartOutlined />
              </Button>
              <div style={{ display: "flex" }}>
                <div style={borderStyle}>
                  {check ? (
                    <Button onClick={Minus} size='small' style={btnStyle}>
                      <MinusOutlined />
                    </Button>
                  ) : (
                    <Button
                      onClick={Minus}
                      disabled
                      size='small'
                      style={btnStyle}>
                      <MinusOutlined />
                    </Button>
                  )}

                  <p style={countStyle}>{countPD}</p>
                  {checkStock ? (
                    <Button onClick={Plus} size='small' style={btnStyle}>
                      <PlusOutlined />
                    </Button>
                  ) : (
                    <Button
                      onClick={Plus}
                      size='small'
                      disabled
                      style={btnStyle}>
                      <PlusOutlined />
                    </Button>
                  )}
                </div>
              </div>

              <p style={{ marginTop: "1rem" }}>
                Availability: {itemDetail?.stock} In Stock
              </p>
            </div>
          </Col>
        </Row>
        <Row className='detail__middle'>
          <Space style={{ marginBottom: 24 }}></Space>
          <Tabs tabPosition={isMoblie ? "top" : "left"}>
            <TabPane
              tab='Description'
              key='1'
              className='detail__middle--boder'>
              <p className='detail__info--descrip'>{itemDetail?.description}</p>
            </TabPane>
            <TabPane
              tab='Reviews'
              key='2'
              className='detail__middle--boder detail__middle__review'>
                  <div className='detail__middle__review--info'>
                    <List
                      className='comment-list'
                      header={`${data.length} Comment`}
                      itemLayout='horizontal'
                      dataSource={data}
                      renderItem={(item) => (
                        <li>
                          <Comment
                            actions={item.actions}
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.datetime}
                          />
                        </li>
                      )}
                    />
                <div className='detail__middle__review--sb'>
                  <h3>Comment:</h3>
                  <Input
                    className='form__group--input'
                    placeholder='Enter review product...'
                    onChange = {(e)=>{setContentVl(e.target.value)}}
                    value={contentVl}
                  />
                  <div className='detail__middle__review--sb--rate'>
                    <h3>Rate:</h3>
                    <Rate
                      tooltips={desc}
                      onChange={handleChange}
                      value={rate}
                    />
                    {rate ? (
                      <span className='ant-rate-text'> : {desc[rate - 1]}</span>
                    ) : (
                      ""
                    )}
                  </div>

                  <br />
                  <Button className='form__btn detail__info--cart' htmlType="submit" size='large' onClick={()=>{handelComment(itemDetail?.id)}}>
                    Comment
                  </Button>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </Row>
        <Row className='detail__bottom'>
          <h1 className='detail__bottom--related'>Related Product</h1>
          <div className='detail__bottom--boder'></div>
          <Row gutter={16}>
            <ProductItem
              img={`http://localhost:3000/${itemDetail?.img}`}
              name={itemDetail?.name}
              price={itemDetail?.price}
              rating={itemDetail?.rating}
            />
            <ProductItem
              img={`http://localhost:3000/${itemDetail?.img}`}
              name={itemDetail?.name}
              price={itemDetail?.price}
              rating={itemDetail?.rating}
            />
            <ProductItem
              img={`http://localhost:3000/${itemDetail?.img}`}
              name={itemDetail?.name}
              price={itemDetail?.price}
              rating={itemDetail?.rating}
            />
          </Row>
        </Row>
      </div>
      <div
        className='modal'
        onClick={handleIsShow}
        style={{ display: isShowCart ? "none" : "flex" }}>
        <Modal name='Add to cart suscces' />
      </div>
      <div
        className='modal'
        onClick={handleIsShowWishlist}
        style={{ display: isShowWishlist ? "none" : "flex" }}>
        <Modal name='Add to wishlist suscces' />
      </div>
    </>
  );
};

export default ProductDetail;
