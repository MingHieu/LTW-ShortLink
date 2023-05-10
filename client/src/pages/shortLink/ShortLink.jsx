import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShortLink = (props) => {
  const { code } = useParams()
  useEffect(() => {
    console.log(code)
  }, [code])
  return <div>ShortLink</div>
}

export default ShortLink
