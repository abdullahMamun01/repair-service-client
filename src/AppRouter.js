import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DefaultLayout from "./Components/DefaultLayout";
import NavbarMenu from "./Components/NavbarMenu";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <DefaultLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </DefaultLayout>
      </Router>
    </div>
  );
};

export default AppRouter;
