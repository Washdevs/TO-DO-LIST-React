import styles from './Coment.module.css';
import { ThumbsDown, ThumbsUp, Trash } from '@phosphor-icons/react';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void; // isto é como se tipa uma função, falamos que tem um parametro, nome qualquer  falando o tipo, e se não tem retorno é void nesta sintaxe de arrow Function
}

export function Coment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  const [unlikeCount, setunLikeCount] = useState(0);

  function handleClickLike() {
    setLikeCount(likeCount + 1);
  }

  function handleClickUnLike() {
    setunLikeCount(unlikeCount + 1);
  }

  // onDeleteComment, prop recebida de Post
  //
  function handleDeleteComment() {
    // 2 - a função recebo o conteúdo e passa para a função deleteComment, que deleta o Conteúdo
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/deyvin.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>deyvin</strong>
              <time title="20 de março" dateTime="2025-03-20 22:25" className={styles.data}>
                {' '}
                Cerca de 1h atrás
              </time>{' '}
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              {' '}
              {/* 1 -  - Ao clicar executa a função */} <Trash size={22} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleClickLike}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
          <button onClick={handleClickUnLike}>
            {' '}
            {/* Também é possível fazer onClick={() => setunLikeCount(unlikeCount + 1)} pois vai executar uma arrow porém da forma chamando a função é mais legível e não tem diferença nenhuma funcional*/}
            <ThumbsDown />
            Desprezar <span>{unlikeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
