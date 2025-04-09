import styles from './Vazio.module.css';
// import { useState } from 'react';

export function Vazio() {
  return (
    <article className={styles.post}>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Coment key={comment} content={comment} onDeleteComment={deleteComment} />;
        })}
      </div>
    </article>
  );
}
