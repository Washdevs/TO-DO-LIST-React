import styles from './App.module.css';
import './global.css';
import { Header } from './components/Header';
import { Post, PostProps } from './components/Post';
//Componente e a interface exportada

const posts: PostProps['post'][] = [
//Entre array a prop da interface exportada
  {
    id: 1,
    content: [
      { type: 'paragraph', content: 'Iai Pessoal 👋' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz',
      },
      {
        type: 'paragraph',
        content: 'no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: '👉 jane.design/doctorcare' },
    ] as const,
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post} // Recebe o Post que é uma prop no componente Post
                // ao invés de enviar cada um das props enviamos só post que é a única prop que contém tudo
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
