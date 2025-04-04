import styles from './Post.module.css';
import { Coment } from './Coment';
import { Avatar } from './Avatar';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useState, InvalidEvent, ChangeEvent, FormEvent } from 'react';

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
} //Trazendo os tipos das propriedades de Author dentro de uma Interface

interface Content {
  //Teve que criar uma interface pois o Content no App.tsx é um array com type e content
  type: 'paragraph' | 'link';
  content: string;
}

export interface Posts {
  //Interface contendo as propriedades e os Tipos de cada Propriedade
  id: number;
  author: Author;
  publishedAt: Date;
  content: readonly Content[]; //content é um array então ele deve aderir o contrato interface sendo um array
  //Readonly para "Leitura apenas" para poder passar valores imutáveis
}

interface PostProps {
  post: Posts;
}

// interface PostType {
//  id: number;
//  author: { name: string; avatarUrl: string; role: string };
//  content: Array<{ type: 'paragraph'; content: string } | { type: 'link'; content: string }>;
//  publishedAt: Date;
// }
// //Esta interface anula o uso das outras 3 Interfaces acima

export function Post({ post }: PostProps) {
  //post contem as regras da interface Posts então pode ser recebido onde chamar o componente Post
  //TIpando as propriedades usando a Interface PostProps
  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

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
      <header className={styles.head}>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
          className={styles.data}
        >
          {publishedDateRelativeNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          }
          if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          } else {
            return <p>Erro ao retornar Valores</p>;
          }
        })}
      </div>
      <form onSubmit={handlleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>

        <textarea
          name="textArea"
          placeholder="Deixe seu Feedback aqui"
          value={newCommentText}
          onChange={handlleCreateNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required // por padrão é true então para ser false por padrão deve ter ={false} Não vai permitir enviar o formulário sem valor
        />

        <footer>
          <button type="submit" disabled={NovoComentarioVazio}>
            {' '}
            {/* Boa pratica para manutanção*/}{' '}
            {/* Botão fica desabilitado se não tiver valor na variável NovoComentarioVazio*/}{' '}
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Coment key={comment} content={comment} onDeleteComment={deleteComment} />; //envia a função para ser executada pelo comment
        })}
      </div>
    </article>
  );
}
