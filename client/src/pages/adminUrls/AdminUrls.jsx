import classNames from 'classnames'
import React from 'react'
import Sidebar from '../../components/sidebar'
import { Table } from 'antd'
import styles from './style.module.scss'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Short Link',
    dataIndex: 'links',
    key: 'links',
    render: (_, { links }) => (
      <div className='flex flex-col'>
        <a href={links.shortLink} target='_blank' rel='noreferrer'>
          {links.shortLink}
          {console.log(links)}
        </a>
        <span className='text-gray-500'>{links.realLink} </span>
      </div>
    )
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user'
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: 'Clicks',
    dataIndex: 'clicks',
    key: 'clicks'
  },
  {
    title: 'Create At',
    key: 'create_at',
    dataIndex: 'create_at'
  }
]

const data = [
  {
    id: '1',
    links: {
      shortLink: 'https://abcdef',
      realLink: 'https://www.baidu.com'
    },
    title: 'My Id',
    clicks: '10',
    create_at: '2023-03-01'
  },
  {
    id: '2',
    links: {
      shortLink: 'https://abcdef',
      realLink: 'https://www.baidu.com'
    },
    title: 'My Id',
    clicks: '10',
    create_at: '2023-03-01'
  },
  {
    id: '3',
    links: {
      shortLink: 'https://abcdef',
      realLink: 'https://www.baidu.com'
    },
    title: 'My Id',
    clicks: '10',
    create_at: '2023-03-01'
  }
]

const AdminUrls = () => {
  return (
    <div className={classNames('w-screen min-h-screen h-screen flex')}>
      <Sidebar />
      <div className='flex-1  flex items-center justify-center bg-[#f7f5f1]'>
        <div className='w-11/12 min-h-[870px] drop-shadow-2xl bg-white rounded-xl items-start pt-20'>
          <h2 className='mb-10 text-center text-black font-bold text-4xl'>
            My Urls
          </h2>
          <Table
            columns={columns}
            dataSource={data}
            bordered={true}
            className={classNames('mx-5', styles.myUrls)}
          />
        </div>
      </div>
    </div>
  )
}

export default AdminUrls
