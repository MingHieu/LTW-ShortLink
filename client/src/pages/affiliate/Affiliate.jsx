import classNames from 'classnames'
import React, { useState } from 'react'
import Sidebar from '../../components/sidebar'
import { Table } from 'antd'

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
    <div className={classNames('w-screen min-h-screen h-screen flex')}>
      <Sidebar />
      <div className='flex-1  flex items-center justify-center bg-[#f7f5f1]'>
        <div className='w-11/12 min-h-[870px] drop-shadow-2xl bg-white rounded-xl items-start justify-center flex pt-20'>
          <Table
            columns={columns}
            dataSource={data}
            bordered={true}
            className={classNames('mx-5 mt-10')}
          />
        </div>
      </div>
    </div>
  )
}

export default Affiliate
