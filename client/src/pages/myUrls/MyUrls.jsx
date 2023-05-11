import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar'
import { Table } from 'antd'
import styles from './style.module.scss'
import { useQuery } from '@tanstack/react-query'
import { DEFAULT_CURRENT, DEFAULT_PAGE_SIZE } from '../../constants/constant'
import { getAllUrlsByUsername } from '../../api/api'
import { encode, formatDate } from '../../api/helper'

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

const MyUrls = () => {
  const [data, setData] = useState([])
  const [pagination, setPagination] = useState({
    page: DEFAULT_CURRENT,
    per_page: DEFAULT_PAGE_SIZE
  })
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(() => {
    getAllUrlsByUsername(user.username, { ...pagination }).then((data) => {
      const newData = data?.data?.data?.map((item, index) => {
        const newItem = {
          id: item.id,
          stt: index + 1,
          links: {
            shortLink: encode(item.id),
            realLink: item.url
          },
          title: item.title,
          clicks: item.clicks,
          create_at: formatDate(item.createdAt),
          affiliate: item.affiliate
        }
        return newItem
      })

      setData(newData)
    })
  }, [])


  return (
    <div className={classNames('w-screen min-h-screen h-screen flex')}>
      <Sidebar />
      <div className='flex-1  flex items-center justify-center bg-[#f7f5f1]'>
        <div className='w-11/12 min-h-[870px] drop-shadow-2xl bg-white rounded-xl items-start pt-20 px-20'>
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

export default MyUrls
