import styles from './Header.module.css';
import igniteLogo from '../assets/Ignite_simbol.svg';

console.log(igniteLogo);

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="ignite-logo" />
      <span className={styles.headertext}>Ignite Feed</span>
    </header>
  );
}
