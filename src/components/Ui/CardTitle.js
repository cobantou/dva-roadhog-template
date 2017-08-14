import React from 'react';
import styles from './CardTitle.less';

function CardTitle({children,style}) {
  return (
    <h2 className={styles.cardTitle} style={style}>{children}</h2>
  );
}

export default CardTitle;
