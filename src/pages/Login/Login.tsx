import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import './Login.css';
import { RouteComponentProps } from 'react-router';
import ajax from '../../utils/ajax';
import { connect } from 'react-redux'
import actions from '../../store/actions/Common'

interface LoginProps extends RouteComponentProps {}

const layout = {
  labelCol: {span: 8},
  wrapperCol: {span: 16},
};
const tailLayout = {
  wrapperCol: {offset: 8, span: 16},
};

class Login extends React.Component <any, any> {

  // public tryingLogin: boolean = true;

  public onFinish = (values: any) => {
    console.log('Success:', values);
    const hide = message.loading('正在登录...');
    ajax.requestLogin(values.username, values.password).then(() => {
      hide();
      this.props.dispatch(actions.setLogin(true))
      this.props.history.push('/index');
    });
    /*if (this.tryingLogin && window.location.pathname !== '/login') {
      const hide = message.loading('加载中...');
      ajax.requestUser().then(state => {
        hide();
        this.setState({isLogin: state});
      })
    }*/
  };

  public onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    console.log(this.props)
    return (
        <Form
            {...layout}
            name="basic"
            className="login-form"
            initialValues={{remember: true}}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
              label="Username"
              name="username"
              rules={[{required: true, message: 'Please input your username!'}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
              label="Password"
              name="password"
              rules={[{required: true, message: 'Please input your password!'}]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
    );
  }
}

export default connect()(Login)
