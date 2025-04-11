import { useState } from 'react';
import styles from './Coment.module.css';
import { Trash } from '@phosphor-icons/react';
// import { useState } from 'react';

interface CommentProps {
  content: string;
  onSetConcluida: (value: any) => void;
  onDeleteComment: (comment: string) => void; // isto é como se tipa uma função, falamos que tem um parametro, nome qualquer  falando o tipo, e se não tem retorno é void nesta sintaxe de arrow Function
}

export function Coment({ content, onDeleteComment, onSetConcluida,  }: CommentProps) {
  const [checkvalue, setCheckvalue] = useState(false);
  // onDeleteComment, prop recebida de Post
  //
  function handleDeleteComment() {
    // 2 - a função recebo o conteúdo e passa para a função deleteComment, que deleta o Conteúdo
    onDeleteComment(content);
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckvalue(event.target.checked);
    onSetConcluida(checkvalue);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <input
              type="checkbox"
              checked={checkvalue}
              onChange={handleChange}
              title={checkvalue ? 'Tarefa Concluída' : 'Marcar como Concluída'}
            ></input>
            <button onClick={handleDeleteComment} title="Deletar Tarefa">
              {' '}
              <Trash size={22} />
            </button>
          </header>
          <p
            style={{
              textDecoration: checkvalue ? 'line-through' : 'none',
            }}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
