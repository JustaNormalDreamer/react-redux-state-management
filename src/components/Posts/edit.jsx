import React, { useState } from "react";
import { connect } from "react-redux";
import { updatePost } from "../../actions/postAction";

const EditPost = props => {
  const [title, setTitle] = useState(props.post.title);
  const [description, setDescription] = useState(props.post.description);

  const submitHandler = () => {
    const post = {
      title,
      description,
      id: props.post.id
    };

    props.updatePost(post);
    setTimeout(() => {
      props.history.push("/");
    }, 500);
  };

  return (
    <div className="container">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-body">
            <h2>Edit Post</h2>
            <div className="form-group">
              <label htmlFor="title">Post Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Post Description</label>
              <textarea
                className="form-control"
                name="description"
                onChange={e => setDescription(e.target.value)}
              >
                {description}
              </textarea>
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
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.postId;
  return {
    post: state.posts.find(post => post.id === id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updatePost: post => {
      dispatch(updatePost(post));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost);
