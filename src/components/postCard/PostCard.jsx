import React from "react";
import style from "./postcard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.imgContainer}>
          <Image src="/post.png" fill className={style.img} />
          <span className={style.date}>01.01.2024</span>
        </div>
      </div>
      <div className={style.bottom}>
        <h1 className={style.title}>{post.title}</h1>
        <p className={style.desc}>{post.body}</p>
        <Link className={style.link} href={`/blog/${post.id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
