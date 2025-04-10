import styles from './Contadores.module.css';

export function Contador() {
  return (
    <div className={styles.contPrincipal}>
      <div className={styles.contModulo}>
        <p className={styles.tfCriadas}>Tarefas Criada, valor</p>
        <p className={styles.tfConcluidas}>Concluídas, valor</p>
      </div>
    </div>
  );
}
