import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../../actions/postAction";
import { Link } from "react-router-dom";

const Post = props => {
  const handleClick = () => {
    props.deletePost(props.post.id);
    setTimeout(() => {
      props.history.push("/");
    }, 500);
  };

  return (
    <div className="container">
      {props.post ? (
        <div className="card">
          <div className="card-body">
            <h2>{props.post.title}</h2>
            <p className="lead">{props.post.description}</p>
            <div className="card-footer">
              <div className="clearfix">
                <div className="float-right">
                  <Link
                    className="btn btn-success mx-2"
                    to={`/posts/${props.post.id}/edit`}
                  >
                    Edit
                  </Link>
                  <button className="btn btn-danger mx-2" onClick={handleClick}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>Loading...</>
      )}
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
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
