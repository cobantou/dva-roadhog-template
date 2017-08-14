import React from 'react';
import styles from './ListSearch.less';
import { Form, Icon, Input, Button ,Select} from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

function ListSearch({form}) {
  const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = form;

  return (
    <div className={styles.normal}>
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          label="就诊医院"
        >
          {getFieldDecorator('hospital', {
            rules: [{ required: false, message: '123' }],
          })(
            <Select placeholder="Please select a country" style={{width:200}}>
              <Option value="china">China</Option>
              <Option value="use">U.S.A</Option>
            </Select>
          )}
        </FormItem>

        <FormItem
          label="患者姓名"
        >
          {getFieldDecorator('userName', {
            rules: [{ required: false, message: '123' }],
          })(
            <Input prefix={<Icon type="user" />} placeholder="Username" />
          )}
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
          >
           查询
          </Button>
        </FormItem>
      </Form>
    </div>
  );
}

export default Form.create({})(ListSearch) ;
