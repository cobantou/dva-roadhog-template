import React from 'react';
import styles from './ListDetailBtns.less';
import {Button} from 'antd'

function ListDetailBtns() {
  return (
    <div className={styles.normal}>
      <Button type="primary">Primary</Button>
      <Button type="primary">Primary</Button>
      <Button type="primary">Primary</Button>
      <Button type="primary">Primary</Button>
    </div>
  );
}

export default ListDetailBtns;
