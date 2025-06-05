import React from 'react';
import PropTypes from 'prop-types';
import styles from './BlogPostDetail.module.css';

const BlogPostDetail = ({ title, content, author, date }) => {
  // Error handling for missing data
  if (!title || !content || !author || !date) {
    return (
      <div className={styles.notFound} role="alert">
        <h2>Blog post not found</h2>
        <p>The requested blog post could not be displayed.</p>
      </div>
    );
  }

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className={styles.blogPostDetail}>
      <header>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.meta}>
          <p className={styles.author}>
            By <span className={styles.authorName}>{author}</span>
          </p>
          <time className={styles.date} dateTime={date}>
            Published on {formattedDate}
          </time>
        </div>
      </header>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
};

BlogPostDetail.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]).isRequired,
};

export default BlogPostDetail;
