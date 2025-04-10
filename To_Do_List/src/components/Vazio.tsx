import styles from './Vazio.module.css';
import { ClipboardText } from '@phosphor-icons/react';

export function Vazio() {
  return (
    <div className={styles.vazio}>
      <p className={styles.icone}>
        <ClipboardText size={40} />
      </p>
      <p className={styles.texto1}>Você ainda não tem tarefas cadastradas</p>
      <p className={styles.texto2}>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
