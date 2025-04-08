import styles from './Vazio.module.css';
import { useState, ChangeEvent, FormEvent } from 'react';
import { PlusCircle } from '@phosphor-icons/react';

export function Vazio() {
  const [comments, setComments] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState('');

  function handlleCreateNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);.
  }

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
