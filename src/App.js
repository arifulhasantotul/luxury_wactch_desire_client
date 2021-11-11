import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "swiper/swiper-bundle.css";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";
import AddProduct from "./Pages/DashboardPage/AddProduct/AddProduct";
import DashPay from "./Pages/DashboardPage/DashPay/DashPay";
import Home from "./Pages/Home/Home";
import MyOrders from "./Pages/OrdersPage/MyOrders/MyOrders";
import Shipping from "./Pages/OrdersPage/Shipping/Shipping";
import Products from "./Pages/ProductsPage/Products/Products";
import AddReview from "./Pages/User/AddReview/AddReview";
import Login from "./Pages/User/Login/Login";
import Register from "./Pages/User/Register/Register";
import PrivateRoute from "./Shared/PrivateRoute/PrivateRoute";

function App() {
   return (
      <>
         <AuthProvider>
            <Router>
               <Navbar />
               <Header />
               <Switch>
                  <Route exact path="/">
                     <Home />
                  </Route>
                  <Route path="/home">
                     <Home />
                  </Route>
                  <Route path="/products">
                     <Products />
                  </Route>
                  <Route path="/login">
                     <Login />
                  </Route>
                  <PrivateRoute exact path="/dashboard/myOrders">
                     <MyOrders />
                  </PrivateRoute>
                  <PrivateRoute exact path="/dashboard/pay">
                     <DashPay />
                  </PrivateRoute>
                  <PrivateRoute exact path="/dashboard/review">
                     <MyOrders />
                  </PrivateRoute>
                  <PrivateRoute path="/addReview">
                     <AddReview />
                  </PrivateRoute>
                  <PrivateRoute path="/addProduct">
                     <AddProduct />
                  </PrivateRoute>
                  <Route path="/register">
                     <Register />
                  </Route>
                  <PrivateRoute path="/shipping">
                     <Shipping />
                  </PrivateRoute>
                  <Route path="*">
                     <NotFound />
                  </Route>
               </Switch>
            </Router>
         </AuthProvider>
      </>
   );
}

export default App;
