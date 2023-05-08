import classNames from 'classnames'
import React from 'react'
import Sidebar from '../../components/sidebar'
import { Table, Tag } from 'antd'
import styles from './style.module.scss'

const Payment = () => {
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <a>{text}</a>
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
      render: (user) => {
        return (
          <div className='flex flex-col'>
            {user.username}
            <span className='text-gray-500'>{user.email || '-'}</span>
          </div>
        )
      }
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status) => {
        let color = ''
        switch (status) {
          case 'Pending':
            color = 'blue'
            break
          case 'Approved':
            color = 'green'
            break
          case 'Rejected':
            color = 'red'
            break
          default:
            color = 'black'
            break
        }

        return <Tag color={color}>{status.toUpperCase()}</Tag>
      }
    }
  ]

  const data = [
    {
      id: '1',
      date: 'My Id',
      amount: '10',
      user: {
        username: 'John Doe',
        email: 'example@gmail.com'
      },
      status: 'Pending'
    },
    {
      id: '2',
      date: 'My Id',
      amount: '10',
      user: {
        username: 'John Doe',
        email: 'example@gmail.com'
      },
      status: 'Approved'
    },
    {
      id: '3',
      date: 'My Id',
      amount: '10',
      user: {
        username: 'John Doe',
        email: 'example@gmail.com'
      },
      status: 'Rejected'
    }
  ]

  return (
    <div className={classNames('w-screen min-h-screen h-screen flex')}>
      <Sidebar />
      <div className='flex-1  flex items-center justify-center bg-[#f7f5f1]'>
        <div className='w-11/12 min-h-[870px] drop-shadow-2xl bg-white rounded-xl items-start justify-center pt-20 px-20'>
          <h2 className='mb-10 text-center text-black font-bold text-4xl'>
            Payment Requests
          </h2>
          <Table
            columns={columns}
            dataSource={data}
            bordered={true}
            className={classNames('', styles.payment)}
            pagination={false}
            onRow={(record, rowIndex) => {
              return {
                onClick: (event) => console.log(rowIndex) // double click row
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Payment
