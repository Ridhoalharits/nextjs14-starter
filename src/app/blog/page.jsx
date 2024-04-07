import React from "react";
import style from "./blog.module.css";
import PostCard from "../../components/postCard/PostCard";
import { getPosts } from "../../../lib/data";

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("ada yang aneh");
//   }
//   return res.json();
// };

const BlogPage = async () => {
  // const posts = await getData();

  const posts = await getPosts();
  // console.log(posts);

  return (
    <div className={style.container}>
      {posts.map((post) => (
        <div className={style.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
