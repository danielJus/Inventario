import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Index from "../components/Index";
import Login from "../components/Login";
import Profile from "../components/UserProfile";
import AddProduct from "../components/AddProduct";
import AddUser from "../components/AddUser";
import Users from "../components/Users";

const App = props => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/add-product" component={AddProduct} />
        <Route exact path="/add-user" component={AddUser} />
        <Route exact path="/users" component={Users} />
        <Redirect exact to="/" component={Index} />
      </Switch>
    </div>
  );
};

export default App;
