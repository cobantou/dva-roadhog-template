/**
 * Created by pengshuo on 17/8/12.
 */
import React from 'react';
import { connect } from 'dva';

function workOverview() {
  return (
    <div className={styles.normal}>
      Route Component: RemoteCoop/wor
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(workOverview);
