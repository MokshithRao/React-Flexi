import React from "react";
import { useParams } from "react-router-dom";
import styles from "./BlogPostDetail.module.css";

const mockPost = {
  1: {
    title: "Exploring the React Ecosystem",
    content: "React is a powerful library for building user interfaces...",
    author: "Jane Doe",
    date: "2025-06-02",
  },
};

function BlogPostDetail() {
  const { id } = useParams();
  const post = mockPost[id] || {};

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.meta}>
        <span>{post.author}</span> | <span>{post.date}</span>
      </div>
      <p className={styles.content}>{post.content}</p>
    </div>
  );
}

export default BlogPostDetail;