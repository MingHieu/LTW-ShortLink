import classNames from 'classnames'
import React from 'react'
import Sidebar from '../../components/sidebar'

const LinkAffiliate = () => {
  return (
    <div className={classNames('w-screen min-h-screen h-screen flex')}>
      <Sidebar />
      <div className='flex-1  flex items-center justify-center bg-[#f7f5f1]'>
        <div className='w-11/12 min-h-[870px] drop-shadow-2xl bg-white rounded-xl items-start justify-center flex pt-20'>
          Request
        </div>
      </div>
    </div>
  )
}

export default LinkAffiliate
