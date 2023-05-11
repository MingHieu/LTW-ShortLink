import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar'
import classNames from 'classnames'
import styles from './style.module.scss'
import { Space, Table, Tag } from 'antd'
import { getAllUsers } from '../../api/api'
import { DEFAULT_CURRENT, DEFAULT_PAGE_SIZE } from '../../constants/constant'

const AdminDashboard = () => {
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
            Dashboard
          </h2>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
