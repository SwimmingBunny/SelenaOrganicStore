/** @format */

import "./style/style.scss";
import Header from "./component/layout/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ROUTE } from "./constant/router.js";

import Footer from "./component/layout/Footer";
import Login from "./pages/form/formLogin/Login";
import Register from "./pages/form/formRegister/Register";
import ListItem from "./pages/shop/ShopListItem/ListItem";
import ProductDetail from "./pages/productDetails/ProductDetails";
import AboutUs from "./pages/aboutUs/AboutUs.js";
import Contact from "./pages/contact/Contact";
import Checkout from "./pages/checkout/Checkout";
import Cart from "./pages/shop/Cart/Cart";
import WishList from "./pages/shop/wishlist/WishList";
import Account from "./pages/myAccount/Account";
import Admin from "./pages/admin/admin";
import "./responsive/responsive.scss";

function App() {
  return (
    <Switch>
      <Route path={ROUTE.USER}>
        <Header />
        <Switch>
          <Route path={ROUTE.HOME} exact>
            <Home />
          </Route>
          <Route path={ROUTE.LOGIN} exact>
            <Login />
          </Route>
          <Route path={ROUTE.REGISTER} exact>
            <Register />
          </Route>
          <Route path={ROUTE.SHOPITEM} exact>
            <ListItem />
          </Route>
          <Route path={ROUTE.SHOPDETAIL} exact>
            <ProductDetail />
          </Route>
          <Route path={ROUTE.ABOUTUS} exact>
            <AboutUs />
          </Route>
          <Route path={ROUTE.CONTACT} exact>
            <Contact />
          </Route>
          <Route path={ROUTE.CHECKOUT} exact>
            <Checkout />
          </Route>
          <Route path={ROUTE.CART} exact>
            <Cart />
          </Route>
          <Route path={ROUTE.WISHLIST} exact>
            <WishList />
          </Route>
          <Route path={ROUTE.MYACCOUNT} exact>
            <Account />
          </Route>
        </Switch>
        <Footer />
      </Route>
      <Route path={ROUTE.ADMIN} exact>
        <Admin />
      </Route>
    </Switch>
  );
}

export default App;
