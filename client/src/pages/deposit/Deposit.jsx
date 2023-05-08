import classNames from 'classnames'
import React, { useState } from 'react'
import Sidebar from '../../components/sidebar'
import { Button, Form, Input } from 'antd'
import Images from '../../assets/images'

const Deposit = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = (values) => {
    setLoading(true)
    console.log('Deposit request:', values)
    // Here you can add code to submit the deposit request
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={classNames('w-screen min-h-screen h-screen flex')}>
      <Sidebar />
      <div className='flex-1  flex items-center justify-center bg-[#f7f5f1]'>
        <div className='w-11/12 min-h-[870px] drop-shadow-2xl bg-white rounded-xl items-center justify-start flex flex-col pt-20'>
          <div className='flex flex-col items-center p-5 rounded-md border-black border-2'>
            <h2 className='self-start font-medium text-2xl mb-8'>
              Deposit Invoice
            </h2>
            <div className='h-20 flex gap-6'>
              <img className='h-full' src={Images.visa} alt='' />
              <img className='h-full' src={Images.masterCard} alt='' />
              <img className='h-full' src={Images.jcb} alt='' />
              <img className='h-full' src={Images.express} alt='' />
            </div>
            <Form
              form={form}
              name='deposit-form'
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout='vertical'
            >
              <Form.Item label='Card Number' name='cardNumber'>
                <Input size='large' />
              </Form.Item>

              <Form.Item label='Name on Card' name='nameOnCard'>
                <Input size='large' />
              </Form.Item>

              <div className='flex gap-10'>
                <Form.Item label='Expiry Date' name='expiryDate'>
                  <Input size='large' />
                </Form.Item>
                <Form.Item label='CVV' name='cvv'>
                  <Input size='large' />
                </Form.Item>
              </div>

              <Form.Item label='Deposit Number' name='depositNumber'>
                <Input size='large' />
              </Form.Item>
              <Form.Item className='float-right'>
                <Button type='primary' htmlType='submit' loading={loading}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deposit
