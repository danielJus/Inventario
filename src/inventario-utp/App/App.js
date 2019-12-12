import React from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Index from "../components/Index";
import Login from "../components/Login";
import Profile from "../components/UserProfile";
import AddProduct from "../components/AddProduct";
import AddUser from "../components/AddUser";
import Users from "../components/Users";
import Navigation from "../components/Navigation";
import ForgotPassword from "../components/ForgotPassword";
import { useDispatch } from "react-redux";
import { fetch_products } from "../redux/actions/productActions";
import { fetch_users } from "../redux/actions/userActions";
import ResetPassword from "../components/ResetPassword";

const App = props => {
  const user = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();
  fetch_products()(dispatch);
  if (user && user.rol === "director") {
    fetch_users()(dispatch);
  }

  return (
    <div>
      <Navigation />
      <Switch>
        {user && user.rol === "coordinador" ? (
          <React.Fragment>
            <Route exact path="/" render={props => <Index {...props} />} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/add-product" component={AddProduct} />
          </React.Fragment>
        ) : user && user.rol === "director" ? (
          <React.Fragment>
            <Route exact path="/" render={props => <Index {...props} />} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/add-product" component={AddProduct} />
            <Route exact path="/add-user" component={AddUser} />
            <Route exact path="/users" component={Users} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route exact path="/" render={props => <Index {...props} />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route
              exact
              path="/reset-password/:token"
              component={ResetPassword}
            />
          </React.Fragment>
        )}
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
};

export default App;
