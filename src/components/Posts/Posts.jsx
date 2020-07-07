import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Posts = props => {
  return (
    <div className="container">
      <div className="row">
        {props.posts.map(post => (
          <div className="col-lg-12 my-2">
            <div className="card" key={post.id}>
              <div className="card-body">
                <h2 className="h3">
                  <Link className="link" to={`/posts/${post.id}`}>{post.title}</Link>
                </h2>
                <p className="lead">{post.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Posts);
