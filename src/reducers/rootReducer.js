const initState = {
  posts: [
    {
      id: "1",
      title: "First post from the heaven",
      description: "lorem ipsum over here."
    },
    {
      id: "2",
      title: "Second post from the heaven",
      description: "lorem ipsum over here."
    },
    {
      id: "3",
      title: "Third post from the heaven",
      description: "lorem ipsum over here."
    }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPost = state.posts.filter(post => post.id !== action.id);
    return {
      ...state,
      posts: newPost
    };
  } else if (action.type === "CREATE_POST") {
    return {
      ...state,
      posts: [
        ...state.posts,
        { id: String(++state.posts.length), ...action.post }
      ]
    };
  } else if (action.type === "UPDATE_POST") {
    const posts = state.posts.map(post =>
      post.id === action.post.id
        ? {
            ...post,
            title: action.post.title,
            description: action.post.description
          }
        : post
    );
    return {
      ...state,
      posts: posts
    };
  }

  return state;
};

export default rootReducer;
