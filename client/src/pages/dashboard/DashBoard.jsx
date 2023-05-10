import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar'
import { Button, Checkbox, Form, Input, Space } from 'antd'
import classNames from 'classnames'
import styles from './style.module.scss'
import { createNewLink } from '../../api/api'

const DashBoard = () => {
  const [shortenLink, setShortenLink] = useState(null)

  const onFinish = (values) => {
    console.log('Success:', values)

    createNewLink(values)
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div
      className={classNames(
        'min-h-screen h-screen flex',
        styles.dashboard
      )}
    >
      <Sidebar />
      <div className='flex-1  flex items-center justify-center bg-[#f7f5f1]'>
        <Space className='w-11/12 min-h-[870px] drop-shadow-2xl bg-white rounded-xl items-start pt-20'>
          <Form
            className='w-10/12'
            name='basic'
            layout='vertical'
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item label='Title(optional)' name='title'>
              <Input size='large' />
            </Form.Item>
            <Form.Item
              label='Destination'
              name='url'
              required
              rules={[
                {
                  required: true,
                  message: 'Please input your link!'
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item className={styles.buttonGroup}>
              <Form.Item name='isAffiliate' valuePropName='checked' noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Button type='primary' htmlType='submit'>
                Create
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </div>
    </div>
  )
}

export default DashBoard
