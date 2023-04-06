import React from 'react';
import P from 'prop-types';
import styles from './PostDetail.module.css';
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

        <button className="btn btn-outline">Abrir</button>
      </div>
    </div>
  );
};

PostDetail.propTypes = {
  post: P.object,
};

export default PostDetail;
