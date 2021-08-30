import "./style/style.scss";
import Header from "./component/layout/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { ROUTE } from "./constant/router.js";
import Footer from "./component/layout/Footer";
import Login from "./pages/form/formLogin/Login";
import Register from "./pages/form/formRegister/Register";
import ListItem from "./pages/shop/ShopListItem/ListItem";
<<<<<<< HEAD
import ProductDetail from "./pages/productDetails/ProductDetails";
import Contact from "./pages/contact/Contact";
=======
import AboutUs from "./pages/aboutUs/AboutUs";
>>>>>>> 5eb6efd458f940c61d3f347fe47797786926a63c

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
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
<<<<<<< HEAD
          <Route  path={ROUTE.SHOPDETAIL} exact>
            <ProductDetail />
          </Route>
          <Route  path={ROUTE.CONTACT} exact>
            <Contact />
=======
          <Route path={ROUTE.ABOUTUS} exact>
            <AboutUs />
>>>>>>> 5eb6efd458f940c61d3f347fe47797786926a63c
          </Route>
        </Switch>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
