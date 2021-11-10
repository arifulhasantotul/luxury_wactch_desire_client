import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "swiper/swiper-bundle.css";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import AuthProvider from "./context/AuthProvider";
import Home from "./Pages/Home/Home";
import Login from "./Pages/User/Login/Login";
import Register from "./Pages/User/Register/Register";

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
                  <Route path="/login">
                     <Login />
                  </Route>
                  <Route path="/register">
                     <Register />
                  </Route>
               </Switch>
            </Router>
         </AuthProvider>
      </>
   );
}

export default App;
