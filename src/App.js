import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "swiper/swiper-bundle.css";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
   return (
      <Router>
         <Navbar />
         <Header />
         <Switch>
            <Route exact="/">
               <Home />
            </Route>
         </Switch>
      </Router>
   );
}

export default App;
