import React from 'react'
import Sidebar from '../../components/sidebar'
import classNames from 'classnames'
import styles from './style.module.scss'
import { Space, Table, Tag } from 'antd'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: (text) => <a>{text}</a>
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email'
  },
  {
    title: 'Roles',
    key: 'roles',
    dataIndex: 'roles',
    filters: [
      {
        text: 'Admin',
        value: 'admin'
      },
      {
        text: 'User',
        value: 'user'
      }
    ],
    onFilter: (value, record) => record.roles.includes(value) === true,
    render: (_, { roles }) => (
      <>
        {roles.map((role, index) => {
          let color = 'geekbue'
          switch (role) {
            case 'admin':
              color = 'green'
              break
            case 'user':
              color = 'red'
              break
            default:
              break
          }
          return (
            <Tag color={color} key={role}>
              {role.toUpperCase()}
            </Tag>
          )
        })}
      </>
    )
  }
]

const data = [
  {
    id: '1',
    name: 'John Brown',
    email: 'example@gmail.com',
    roles: ['user']
  },
  {
    id: '2',
    name: 'Jim Green',
    email: 'example@gmail.com',
    roles: ['user']
  },
  {
    id: '3',
    name: 'Joe Black',
    email: 'example@gmail.com',
    roles: ['admin']
  }
]

const Users = () => {
  return (
    <div
      className={classNames(
        'w-screen min-h-screen h-screen flex',
        styles.dashboard
      )}
    >
      <Sidebar />
      <div className='flex-1  flex items-center justify-center bg-[#f7f5f1]'>
        <div className='w-11/12 min-h-[870px] drop-shadow-2xl bg-white rounded-xl items-start pt-20 px-20'>
          <h2 className='mb-10 text-center text-black font-bold text-4xl'>
            Manage Users
          </h2>{' '}
          <Table
            columns={columns}
            dataSource={data}
            bordered={true}
            className={classNames('mx-5', styles.users)}
          />
        </div>
      </div>
    </div>
  )
}

export default Users
