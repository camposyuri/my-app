import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import ViewPosts from "./pages/ViewPosts";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/view-posts/:id" component={ViewPosts} />
    </Switch>
  );
};

export default Routes;
