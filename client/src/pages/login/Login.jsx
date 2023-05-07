import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import classNames from 'classnames'
import styles from './style.module.scss'

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  return (
    <div
      className={classNames(
        'flex flex-1 items-center justify-center h-screen bg-[#f7f5f1]'
      )}
    >
      <Form
        className='bg-white p-20 w-[500px] rounded-xl shadow-lg'
        name='normal_login'
        onFinish={onFinish}
        initialValues={{ remember: true }}
      >
        <h1 className='text-center text-black font-bold text-3xl mb-14'>
          Shorten Link
        </h1>
        <Form.Item
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your Username!'
            }
          ]}
        >
          <Input
            prefix={<UserOutlined className='w-10/12' />}
            placeholder='Username'
            size='large'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!'
            }
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
            size='large'
          />
        </Form.Item>
        <Form.Item className={styles.remember}>
          <Form.Item name='remember' valuePropName='checked' noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className='login-form-forgot' href=''>
            Forgot password
          </a>
        </Form.Item>

        <Form.Item
          className={
            (classNames('flex flex - col justify - center items - center'),
            styles.login)
          }
        >
          <Button
            type='primary'
            htmlType='submit'
            className='login-form-button'
          >
            Log in
          </Button>
          Or <a href='/register'>Register now!</a>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
