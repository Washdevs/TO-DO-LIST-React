import styles from './Coment.module.css';
import { Trash } from '@phosphor-icons/react';
// import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void; // isto é como se tipa uma função, falamos que tem um parametro, nome qualquer  falando o tipo, e se não tem retorno é void nesta sintaxe de arrow Function
}

export function Coment({ content, onDeleteComment }: CommentProps) {

  // onDeleteComment, prop recebida de Post
  //
  function handleDeleteComment() {
    // 2 - a função recebo o conteúdo e passa para a função deleteComment, que deleta o Conteúdo
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <button onClick={handleDeleteComment} title="Deletar Tarefa">
              {' '}
            <Trash size={22} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <input type='checkbox'>
          </input>
        </footer>
      </div>
    </div>
  );
}
