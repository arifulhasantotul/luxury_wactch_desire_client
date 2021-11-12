import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "swiper/swiper-bundle.css";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./context/AuthProvider";
import AddProduct from "./Pages/DashboardPage/AddProduct/AddProduct";
import DashPay from "./Pages/DashboardPage/DashPay/DashPay";
import DashReview from "./Pages/DashboardPage/DashReview/DashReview";
import MakeAdmin from "./Pages/DashboardPage/MakeAdmin/MakeAdmin";
import ManageOrders from "./Pages/DashboardPage/ManageOrders/ManageOrders";
import ManageProducts from "./Pages/DashboardPage/ManageProducts/ManageProducts";
import ManageUsers from "./Pages/DashboardPage/ManageUsers/ManageUsers";
import Home from "./Pages/Home/Home";
import MyOrders from "./Pages/OrdersPage/MyOrders/MyOrders";
import Shipping from "./Pages/OrdersPage/Shipping/Shipping";
import Products from "./Pages/ProductsPage/Products/Products";
import AddReview from "./Pages/User/AddReview/AddReview";
import Login from "./Pages/User/Login/Login";
import Register from "./Pages/User/Register/Register";
import AdminRoute from "./Shared/AdminRoute/AdminRoute";
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
                  <PrivateRoute path="/dashboard/myOrders">
                     <MyOrders />
                  </PrivateRoute>
                  <PrivateRoute path="/dashboard/pay">
                     <DashPay />
                  </PrivateRoute>
                  <PrivateRoute path="/dashboard/review">
                     <DashReview />
                  </PrivateRoute>
                  <AdminRoute path="/dashboard/makeAdmin">
                     <MakeAdmin />
                  </AdminRoute>
                  <AdminRoute path="/dashboard/manageOrders">
                     <ManageOrders />
                  </AdminRoute>
                  <AdminRoute path="/dashboard/manageProducts">
                     <ManageProducts />
                  </AdminRoute>
                  <AdminRoute path="/dashboard/manageUsers">
                     <ManageUsers />
                  </AdminRoute>
                  <AdminRoute path="/dashboard/addProduct">
                     <AddProduct />
                  </AdminRoute>
                  <PrivateRoute path="/addReview">
                     <AddReview />
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
               <Footer />
            </Router>
         </AuthProvider>
      </>
   );
}

export default App;
