import React, { useReducer } from "react";

const BlogContext = React.createContext();
const blogReducer = (state, action) => {
  // in here we specify what to do with the data
  switch (action.type) {
    case "add_blogpost":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
  }
};
export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);
  const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };
  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {/* if we have identical key and value we can use one of them *addBlogPost */}
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
