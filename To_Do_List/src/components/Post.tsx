import styles from './Post.module.css';
import { Coment } from './Coment';
import { useState, InvalidEvent, ChangeEvent, FormEvent } from 'react';
import { PlusCircle } from '@phosphor-icons/react';

interface PostType {
  id: number;
  content: Array<{ type: 'paragraph'; content: string } | { type: 'link'; content: string }>;
}
//Esta interface anula o uso das outras 3 Interfaces

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
    <article className={styles.post}>
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

      </div>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Coment key={comment} content={comment} onDeleteComment={deleteComment} />;
        })}
      </div>
    </article>
  );
}
