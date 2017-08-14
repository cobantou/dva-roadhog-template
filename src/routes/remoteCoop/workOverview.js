/**
 * Created by pengshuo on 17/8/12.
 */
import React from 'react';
import { connect } from 'dva';
import { Row, Col, Card, Icon } from 'antd';
import CardTitle from "../../components/Ui/CardTitle"

function workOverview() {
  return (
    <div >
      <Row gutter={30}>
        <Col >
          <Card bordered={false}
                bodyStyle={{
                  padding: '30px 20px',
                  marginBottom: '20px'
                }}
          >
            <CardTitle>今日QA概况</CardTitle>
            几个图块
          </Card>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col >
          <Card bordered={false}
                bodyStyle={{
                  padding: '30px 20px',
                  marginBottom: '20px'
                }}
          >
            <CardTitle>本周QA概况</CardTitle>
            echart的表格
          </Card>
        </Col>
      </Row>
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(workOverview);
