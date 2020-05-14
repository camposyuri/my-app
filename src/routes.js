import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import AllPost from "./pages/AllPost";
import NewPost from "./pages/NewPost";
import ViewPostsUsers from "./pages/ViewPostsUsers";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/all-post" component={AllPost} />
      <Route path="/new-post" component={NewPost} />
      <Route path="/view-posts/:id" component={ViewPostsUsers} />
    </Switch>
  );
};

export default Routes;
