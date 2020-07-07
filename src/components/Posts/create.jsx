import React, { useState } from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/postAction";

const CreatePost = props => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = () => {
    const post = {
      title,
      description
    };

    props.createPost(post);
    setTimeout(() => {
      props.history.push("/");
    }, 500);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2>Create Post</h2>
          <div className="form-group">
            <label htmlFor="title">Post Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Post Description</label>
            <textarea
              className="form-control"
              name="description"
              onChange={e => setDescription(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button
              className="form-control btn btn-primary"
              onClick={submitHandler}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: post => {
      dispatch(createPost(post));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);
