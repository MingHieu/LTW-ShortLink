import React from 'react'
import User from './User'
import userAvatar from '../../assets/images/default-user.jpeg'
import { Button, Space } from 'antd'
import classNames from 'classnames'
import styles from './style.module.scss'
import Admin from './Admin'

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const handleClick = () => {
    localStorage.removeItem('token'), localStorage.removeItem('user')
  }

  return (
    <div className='w-[300px] h-full flex justify-between items-center flex-col '>
      <Space
        className={classNames('flex flex-col mt-4 w-full', styles.sidebar)}
      >
        <a href='/' className='m-6 hover:no-underline'>
          <h1 className='font-extrabold text-5xl text-black'>Shorten Link</h1>
        </a>
        <div className='w-full pl-6'>
          {user && user?.role === 'user' ? <User /> : <Admin />}
        </div>
      </Space>
      <div className='mb-10 flex flex-col items-center justify-center gap-6 '>
        <a href='/profile' className='padding'>
          <img
            className='w-[50px] rounded-full'
            src={userAvatar}
            alt='User Avatar'
          />
          <span className='username-header'></span>
        </a>
        <Button type='primary' className='bg-red-500' onClick={handleClick}>
          <i className='fa-solid fa-right-from-bracket'></i>Đăng xuất
        </Button>
      </div>
    </div>
  )
}

export default Sidebar
