import React from 'react';
import P from 'prop-types';
import styles from './PostDetail.module.css';
import { Link } from 'react-router-dom';
const PostDetail = ({ post }) => {
  return (
    <div className={styles.postsDetails}>
      <img src={post.image} alt="Te" />

      <div className={styles.content}>
        <h2>{post.title}</h2>
        <p className={styles.createBy}>
          <span className={styles.hash}>Criado por </span>
          {post.createBy}
        </p>
        <div className={styles.tags}>
          {post.tagsList.map((singlePost) => (
            <p key={singlePost}>
              <span className={styles.hash}>#</span>
              {singlePost}
            </p>
          ))}
        </div>
        <Link to={`/post/${post.id}`} className="btn btn-outline">
          Abrir
        </Link>
      </div>
    </div>
  );
};

PostDetail.propTypes = {
  post: P.object,
};

export default PostDetail;
