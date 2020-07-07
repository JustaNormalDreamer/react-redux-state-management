import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Post from "./components/Posts/Post";
import Posts from "./components/Posts/Posts";
import CreatePost from "./components/Posts/create";
import EditPost from "./components/Posts/edit";
import Navbar from "./components/Navbar/";

const Routed = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading</div>}>
        <div className="my-4">
          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/posts/create" component={CreatePost} />
            <Route exact path="/posts/:postId/edit" component={EditPost} />
            <Route exact path="/posts/:postId" component={Post} />
          </Switch>
        </div>
      </Suspense>
    </Router>
  );
};

export default Routed;
