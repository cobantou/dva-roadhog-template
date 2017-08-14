import React from 'react';
import styles from './CardTitle.less';

function CardTitle({children}) {
  return (
    <h2 className={styles.cardTitle}>{children}</h2>
  );
}

export default CardTitle;
