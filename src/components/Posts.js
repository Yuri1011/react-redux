import React from "react";
import Post from "./Post";

export default ({ posts }) => {
  if (!posts.lenght) {
    return <p>Постов пока что нет</p>;
  }

  return posts.map((post) => <Post post={post} key={post} />);
};
