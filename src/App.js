import { Button, Divider, Form , Input, message, Typography } from 'antd';
import {GoogleOutlined,FacebookFilled,TwitterOutlined  } from "@ant-design/icons";
import './App.css';


function App() {

  const login = () => {
    message.success('Login Successful!');
  }

  return (
    <div className="appBg">
      <Form className='loginForm' onFinish={login}>
        <Typography.Title> Welcome Back!</Typography.Title>
        <Form.Item 
        rules={[
          {
          required: true,
          type:'email',
          message:'Please enter valid email' ,
        },
      ]}
        label='Email' name={'myEmail'}>
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item 
        rules={[
          {
          required: true,
          message:'Please enter your password' ,
        },
      ]}
        label='Password' name={'myPassword'}>
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Button type='primary' htmlType='submit' block>
          Login
        </Button>
        <Divider style={{borderColor:"black"}}>or Login with</Divider>
        <div className='socialLogin'>
          <GoogleOutlined className='socialIcon' onClick={login} style={{color:"red"}}/>
          <FacebookFilled className='socialIcon' onClick={login} style={{color:"blue"}}/>
          <TwitterOutlined className='socialIcon' onClick={login} style={{color:"cyan"}}/>
        </div>
      </Form>     
    </div>
  );
}

export default App;
