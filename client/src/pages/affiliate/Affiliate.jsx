import classNames from 'classnames'
import React, { useState } from 'react'
import Sidebar from '../../components/sidebar'
import { Table, Tag } from 'antd'
import Title from '../../components/title'

const columns_1 = [
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
        </a>
        <span className='text-gray-500'>{links.realLink} </span>
      </div>
    )
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
  },
  {
    title: 'Affiliate',
    key: 'affiliate',
    dataIndex: 'affiliate'
  },
  {
    title: 'Action',
    key: 'action',
    dataIndex: 'action',
    render: () => <Button>ACCEPTED</Button>
  }
]

const columns_2 = [
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
        </a>
        <span className='text-gray-500'>{links.realLink} </span>
      </div>
    )
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
  },
  {
    title: 'Affiliate',
    key: 'affiliate',
    dataIndex: 'affiliate'
  }
]

const Affiliate = () => {
  const [data, setData] = useState()

  return (
    <div className={classNames('min-h-screen  flex')}>
      <Sidebar />
      <div className='flex-1 flex items-center justify-center bg-[#f7f5f1] py-8'>
        <div className='w-11/12 min-h-[870px] drop-shadow-2xl bg-white rounded-xl items-center justify-start flex flex-col pt-20'>
          <Title title={'Link tiếp thị'} />
          <Table
            columns={columns_1}
            dataSource={data}
            bordered={true}
            className={classNames('mx-5 mt-10 w-11/12')}
          />
          <br />
          <br />
          <br />
          <Title title={'Link đã nhận'} />
          <Table
            columns={columns_2}
            dataSource={data}
            bordered={true}
            className={classNames('mx-5 mt-10 w-11/12')}
          />
        </div>
      </div>
    </div>
  )
}

export default Affiliate
