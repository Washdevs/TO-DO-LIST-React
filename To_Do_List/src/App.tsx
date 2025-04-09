import styles from './App.module.css';
import './global.css';
import { Header } from './components/Header';
import { Post } from './components/Post';
export function App() {
  return (
    <div className={styles.corpo}>
      <Header />
      <Post />
    </div>
  );
}
