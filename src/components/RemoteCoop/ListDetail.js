import React from 'react';
import styles from './ListDetail.less';
import ListDetailBtns from './ListDetailBtns'
import ListDetailProgress from './ListDetailProgress'
import ListDetailInfo from './ListDetailInfo'

function ListDetail() {
  return (
    <div className={styles.normal}>
      <ListDetailBtns/>
      <ListDetailProgress/>
      <ListDetailInfo/>
    </div>
  );
}

export default ListDetail;
