import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BlogPostItem from './BlogPostItem';
import styles from './BlogPostList.module.css';

const BlogPostList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return (
      <div className={styles.emptyState} role="status">
        <p>No blog posts available at the moment.</p>
      </div>
    );
  }

  return (
    <section className={styles.blogPostList}>
      <div className={styles.grid}>
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/posts/${post.id}`}
            className={styles.postLink}
          >
            <BlogPostItem {...post} />
          </Link>
        ))}
      </div>
    </section>
  );
};

BlogPostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      summary: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BlogPostList;
