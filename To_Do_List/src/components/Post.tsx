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
  //post contem as regras da interface Posts então pode ser recebido onde chamar o componente Post
  //TIpando as propriedades usando a Interface PostProps

  const [comments, setComments] = useState<string[]>([]);
  // Temos um array de comentários que começa com o valor inicial "Top".

  const [newCommentText, setNewCommentText] = useState('');
  // O texto do novo comentário começa como uma string vazia.

  function handlleCreateNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity(''); // Para que a mensagem seja vazia e não volte a apercer quando digitar algo
    setNewCommentText(event.target.value);

    // Pega o valor digitado no input e atualiza o estado com ele.
  }

  function handlleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    // Impede o comportamento padrão do HTML ao enviar o formulário (recarregar a página).

    setComments([...comments, newCommentText]); // Adicionar um novo comentário com o valor. Nesta ordem.
    /* Usa o spread operator (...) para copiar todos os comentários atuais.
       Depois, adiciona o novo comentário (newCommentText) ao final desse novo array.
       Por fim, chama setComments() para atualizar o estado com esse novo array.
    */

    setNewCommentText('');
    // Limpa o campo de input após adicionar o comentário.
  }

  function deleteComment(commentToDelete: string) {
    const listaDeComentariosSemODeletado = comments.filter(comment => {
      return comment !== commentToDelete;
    });
    // ao executar ela recebe comment como conteúdo que deve ser excluído
    setComments(listaDeComentariosSemODeletado);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Preencha o campo obrigatório'); //No elemento acontecendo o evento chamado a função que mostra esta string ao usuário ao realizar o evento
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
          required // por padrão é true então para ser false por padrão deve ter ={false} Não vai permitir enviar o formulário sem valor
        />
          <button type="submit" disabled={NovoComentarioVazio}>
            {' '}
            {/* Boa pratica para manutanção*/}{' '}
            {/* Botão fica desabilitado se não tiver valor na variável NovoComentarioVazio*/}{' '}
            Criar <PlusCircle />
          </button>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Coment key={comment} content={comment} onDeleteComment={deleteComment} />; //envia a função para ser executada pelo comment
        })}
      </div>
    </article>
  );
}
