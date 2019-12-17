import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import Index from "../components/Index/Index";
import Login from "../components/Login/Login";
import Profile from "../components/UserProfile/UserProfile";
import AddProduct from "../components/AddProduct/AddProduct";
import AddUser from "../components/AddUser/AddUser";
import Users from "../components/Users/Users";
import Navigation from "../components/Navigation/Navigation";
import ResetPassword from "../components/ResetPassword/ResetPassword";
import ForgotPassword from "../components/ForgotPassword/ForgotPassword";
import { useDispatch } from "react-redux";
import { fetch_products } from "../redux/actions/productActions";
import { fetch_users } from "../redux/actions/userActions";
import { Alert } from "reactstrap";
import ProductsInfo from "../components/ProductsInfo/ProductsInfo";
import "./App.scss";

const App = props => {
  const user = useSelector(({ auth }) => auth.user);

  const dispatch = useDispatch();
  fetch_products()(dispatch);
  if (user && user.rol === "director") {
    fetch_users()(dispatch);
  }

  const [alert, setAlert] = useState(false);

  const showAlerts = () => {
    if (user) {
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 2000);
    }
  };

  useEffect(() => {
    showAlerts();
  }, [user]);

  return (
    <div>
      <Navigation />
      <Switch>
        {user && user.rol === "coordinador" ? (
          <React.Fragment>
            <Alert className="alert" color="success" isOpen={alert}>
              <p className="text-center">
                Bienvenido: {user && user.nombreUsuario}
              </p>
            </Alert>
            <Route exact path="/" render={props => <Index {...props} />} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/add-product" component={AddProduct} />
            <Route exact path="/products-info" component={ProductsInfo} />
          </React.Fragment>
        ) : user && user.rol === "director" ? (
          <React.Fragment>
            <Alert className="alert" color="success" isOpen={alert}>
              <p className="text-center">
                Bienvenido: {user && user.nombreUsuario}
              </p>
            </Alert>

            <Route exact path="/" render={props => <Index {...props} />} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/add-product" component={AddProduct} />
            <Route exact path="/add-user" component={AddUser} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/products-info" component={ProductsInfo} />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route exact path="/" render={props => <Index {...props} />} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route exact path="/reset-password" component={ResetPassword} />
          </React.Fragment>
        )}
        <Redirect from="*" to="/" />
      </Switch>
    </div>
  );
};

export default App;
