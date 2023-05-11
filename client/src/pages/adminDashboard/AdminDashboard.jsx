import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar'
import classNames from 'classnames'
import styles from './style.module.scss'
import Title from '../../components/title'
import { Card } from 'antd'

const AdminDashboard = () => {
  const data = [
    {
      title: 'Số lượng link',
      color: 'green',
      quantity: 9
    },
    {
      title: 'Số lượng link afiliate',
      color: 'yellow',
      quantity: 5
    },
    {
      title: 'Số lượng yêu cầu',
      color: 'blue',
      quantity: 9
    }
  ]

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
          <Title title={'Dashboard'} />
          <div className='flex justify-center gap-5'>
            {data.map((card) => (
              <Card
                key={card.color}
                title={card.title}
                bodyStyle={{ paddingTop: 0 }}
                className={`px-2 border-b-4 border-${card.color}-500 border-blue-500`}
              >
                <hr />
                <p className='pt-4 font-bold text-2xl'>{card.quantity}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
