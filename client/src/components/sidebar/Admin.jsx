import React from 'react'
import { BsCreditCard2BackFill } from 'react-icons/bs'
import { MdOutlineLink } from 'react-icons/md'
import { FaUserFriends } from 'react-icons/fa'

const Admin = () => {
  return (
    <ul className='list-none'>
      <li className='m-4'>
        <a
          className='no-underline text-black text-xl font-medium flex items-center hover:no-underline'
          href='users'
        >
          <FaUserFriends size={24} className='mr-3' />
          User
        </a>
      </li>
      <li className='m-4'>
        <a
          className='no-underline text-black text-xl font-medium flex items-center hover:no-underline'
          href='payment'
        >
          <BsCreditCard2BackFill size={24} className='mr-3' />
          Payment
        </a>
      </li>
      <li className='m-4'>
        <a
          className='no-underline text-black text-xl font-medium flex items-center hover:no-underline'
          href='urls'
        >
          <MdOutlineLink size={24} className='mr-3' />
          Urls
        </a>
      </li>
    </ul>
  )
}

export default Admin
