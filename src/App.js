import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "./App.css";
import Header from "./layouts/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/basket/Checkout";
import Login from "./components/login/Login";
import Payment from "./components/payment/Payment";
import Orders from "./components/orders/Orders";
import { auth } from "./firebase/firebase";
import { useStateValue } from "./context/StateProvider";
const promise = loadStripe(
  "pk_test_51HQecRHZ03bsaNKGwdY1J3GXSUUDM0cJgF4OsGsnvaFYv3ZAP7AFbjsuvFZgAhwodInPlxpwc8ZJ9FsYCGHHoRPW00f8OmTKer"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
