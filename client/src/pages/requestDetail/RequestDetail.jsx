import React, { useEffect, useState } from 'react'
import Sidebar from '../../components/sidebar'
import classNames from 'classnames'
import { Button, Card } from 'antd'
import Images from '../../assets/images'
import styles from './style.module.scss'
import { useParams } from 'react-router-dom'

const RequestDetail = () => {
  const fields = [
    {
      title: 'Tiêu đề',
      key: 'title'
    },
    {
      title: 'Link rút gon',
      key: 'short_link'
    },
    {
      title: 'Link gốc',
      key: 'real_link'
    },
    {
      title: 'Trạng thái',
      key: 'affiliate'
      // render:
    },
    {
      title: 'Người tạo',
      key: 'user_create'
    },
    {
      title: 'Create at',
      key: 'create_at'
    }
  ]

  const initial = {
    title: '',
    short_link: '',
    real_link: '',
    affiliate: '',
    user_create: '',
    create_at: ''
  }

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }

  const [urlDetail, setUrlDetail] = useState(initial)

  const { id } = useParams()

  useEffect(() => {
    
  })

  return (
    <div className={classNames('w-screen min-h-screen h-screen flex')}>
      <Sidebar />
      <div className='flex-1  flex items-center justify-center bg-[#f7f5f1]'>
        <div className='w-11/12 min-h-[870px] drop-shadow-2xl bg-white rounded-xl items-center flex flex-col p-10 gap-10 '>
          {/* <Avatar size={200} icon={<img src={Images.avatar} />} /> */}
          <Card
            title={
              <span className='flex gap-2.5'>
                <img src={Images.infoIcon} alt='' className='inline' />
                <span className={styles.title}>Thông tin link</span>
              </span>
            }
            className={classNames(styles.card, 'pt-[10px] w-full border-none')}
            bodyStyle={{ paddingTop: 0 }}
          >
            <hr />
            {fields.map((field) => (
              <div key={field.key} className={styles.info}>
                <p className={styles.info__label}>{field.title}</p>
                <p className={styles.info__value}>{urlDetail[field.key]}</p>
              </div>
            ))}
          </Card>
          <div
            className={classNames(
              'self-end pr-20 flex gap-10',
              styles.buttonGroup
            )}
          >
            <Button className='bg-red-500'>Reject</Button>
            <Button className='bg-blue-500'>Approve</Button>
          </div>
          ;
        </div>
      </div>
    </div>
  )
}

export default RequestDetail
