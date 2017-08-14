import React from 'react';
import {connect} from 'dva';
import {Row, Col, Card, Icon} from 'antd';
import ListSearch from '../../components/RemoteCoop/ListSearch'
import ListTable from '../../components/RemoteCoop/ListTable'
import ListTag from '../../components/RemoteCoop/ListTag'
import ListDetail from '../../components/RemoteCoop/ListDetail'


function RemoteCoopList() {
  return (
    <div style={{
      background: '#fff'
    }}>
      <Row gutter={30}>
        <Col >
          <ListSearch/>
        </Col>
        <Col span={8} >
          <ListTable/>
          <ListTag/>
        </Col>
        <Col span={16}>
          <ListDetail/>
        </Col>


      </Row>

    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(RemoteCoopList);
