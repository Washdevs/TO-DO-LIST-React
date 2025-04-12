import styles from './Contadores.module.css';

interface ContadorProps {
  concluidas?: number;
  total?: number;
}

export function Contador({ concluidas, total }: ContadorProps) {
  return (
    <div className={styles.contPrincipal}>
      <div className={styles.contModulo}>
        <p className={styles.tfCriadas}>
          {' '}
          Tarefas Criadas <p className={styles.contTotal}>{total}</p>
        </p>
        <p className={styles.tfConcluidas}>
          Concluídas{' '}
          <p className={styles.contConcl}>
            {concluidas} de {total}{' '}
          </p>
        </p>
      </div>
    </div>
  );
}
