import styles from './Post.module.css';
import { Coment } from './Coment';
import { useState, InvalidEvent, ChangeEvent, FormEvent } from 'react';
import { PlusCircle } from '@phosphor-icons/react';

export interface PostType {
  id: number;
  content: string;
}

export interface PostProps {
  post: PostType;
}

export function Post() {
  const [comments, setComments] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState('');

  function handlleCreateNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handlleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function deleteComment(commentToDelete: string) {
    const listaDeComentariosSemODeletado = comments.filter(comment => {
      return comment !== commentToDelete;
    });
    setComments(listaDeComentariosSemODeletado);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Preencha o campo obrigatório');
  }

  const NovoComentarioVazio = newCommentText.length === 0;

  return (
    <div className={styles.post}>
      <form onSubmit={handlleCreateNewComment} className={styles.commentForm}>
        <textarea
          name="textArea"
          placeholder="Adcione uma nova tarefa"
          value={newCommentText}
          onChange={handlleCreateNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <button type="submit" disabled={NovoComentarioVazio}>
          Criar <PlusCircle />
        </button>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Coment key={comment} content={comment} onDeleteComment={deleteComment} />;
        })}
      </div>
    </div>
  );
}
