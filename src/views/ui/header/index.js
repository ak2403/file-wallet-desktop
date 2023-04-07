import React from 'react'
import './style.scss'

const Header = ({title, className}) => {
  return <h3 className={`ss-header ${className}`}>{title}</h3>
}

export default Header