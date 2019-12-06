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
import { useDispatch } from "react-redux";
import { fetch_products } from "../redux/actions/productActions";
import { fetch_users } from "../redux/actions/userActions";

const App = props => {
  const user = useSelector(({ auth }) => auth.user);
  const dispatch = useDispatch();
  fetch_products()(dispatch);
  fetch_users()(dispatch);

  return (
    <div>
      <Navigation />
      <Switch>
        {user ? (
          <>
            <Route exact path="/" component={Index} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/add-product" component={AddProduct} />
            <Route exact path="/add-user" component={AddUser} />
            <Route exact path="/users" component={Users} />
          </>
        ) : (
          <>
            <Route exact path="/" component={Index} />
            <Route exact path="/login" component={Login} />
          </>
        )}
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
