export const deletePost = id => {
  return {
    type: "DELETE_POST",
    id
  };
};

export const updatePost = post => {
  return {
    type: "UPDATE_POST",
    post
  };
};

export const createPost = post => {
  return {
    type: "CREATE_POST",
    post
  };
};
