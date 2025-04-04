import { ImgHTMLAttributes } from 'react';

import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  // A interface herda todos os atributos tipados da tag <img> através de ImgHTMLAttributes<HTMLImageElement>.
  // Especificamos o tipo HTMLImageElement para indicar que os atributos são referentes a uma tag de imagem.
  hasBorder?: boolean; // O ponto de interrogação indica que essa propriedade é opcional.
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  // Utilizamos o rest operator (...props) para capturar todas as propriedades, exceto hasBorder.
  // Como a interface herda os atributos da tag <img>, podemos usá-los diretamente aqui.
  // Isso permite que o componente aceite todas as propriedades padrão de uma imagem.
  return <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} {...props} />; //Pegando todas as propriedades que temos no rest operatos e passando no elemento
}
// Agora, ao usar o componente Avatar, será possível passar qualquer propriedade global da tag <img>,
// como src, alt, title, width, height, etc., além da propriedade customizada "hasBorder".
