import React from 'react';
import {Row ,Col} from 'antd'
import styles from './ListDetailInfo.less';
import CardTitle from '../Ui/CardTitle'

function ListDetailInfo() {
  return (
    <div className={styles.normal}>
      <div className={styles.card}>
        <CardTitle style={{marginBottom:20}}>患者基本信息</CardTitle>
        <Row>
          <Col span={8} className={styles.col}>
            <lable>姓 名：</lable>
            <span className={styles.name}>张三</span>
          </Col>
          <Col span={8} className={styles.col}>
            <lable>姓 名：</lable>
            <span className={styles.name}>张三</span>
          </Col>
          <Col span={8} className={styles.col}>
            <lable>姓 名：</lable>
            <span className={styles.name}>张三</span>
          </Col>
          <Col span={8} className={styles.col}>
            <lable>姓 名：</lable>
            <span className={styles.name}>张三</span>
          </Col>
          <Col span={8} className={styles.col}>
            <lable>姓 名：</lable>
            <span className={styles.name}>张三</span>
          </Col>
        </Row>
      </div>
      <div className={styles.card}>
        <CardTitle style={{marginBottom:20}}>患者基本信息</CardTitle>
        <Row>
          <Col span={8} className={styles.col}>
            <lable>姓 名：</lable>
            <span className={styles.name}>张三</span>
          </Col>
          <Col span={8} className={styles.col}>
            <lable>姓 名：</lable>
            <span className={styles.name}>张三</span>
          </Col>
          <Col span={8} className={styles.col}>
            <lable>姓 名：</lable>
            <span className={styles.name}>张三</span>
          </Col>
          <Col span={8} className={styles.col}>
            <lable>姓 名：</lable>
            <span className={styles.name}>张三</span>
          </Col>
          <Col span={8} className={styles.col}>
            <lable>姓 名：</lable>
            <span className={styles.name}>张三</span>
          </Col>
        </Row>
      </div>
      <div className={styles.card}>
        <CardTitle style={{marginBottom:20}}>患者基本信息</CardTitle>
        <Row>
          <Col span={8} className={styles.col}>
            <lable>姓 名：</lable>
            <span className={styles.name}>张三</span>
          </Col>
          <Col span={8} className={styles.col}>
            <lable>姓 名：</lable>
            <span className={styles.name}>张三</span>
          </Col>
          <Col span={8} className={styles.col}>
            <lable>姓 名：</lable>
            <span className={styles.name}>张三</span>
          </Col>
          <Col span={8} className={styles.col}>
            <lable>姓 名：</lable>
            <span className={styles.name}>张三</span>
          </Col>
          <Col span={8} className={styles.col}>
            <lable>姓 名：</lable>
            <span className={styles.name}>张三</span>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ListDetailInfo;
