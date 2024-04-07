import React from "react";
import styles from "./singePost.module.css";
import Image from "next/image";
import PostUser from "../../../components/postUser/postUser";

// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("ada yang aneh");
//   }
//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  // const { slug } = params;
  // const post = await getData(slug);
  // console.log(post);

  // console.log(params);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/post.png" fill alt="" />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            width={50}
            height={50}
            src="/noavatar.png"
          />
          <PostUser userId={post.id} />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
