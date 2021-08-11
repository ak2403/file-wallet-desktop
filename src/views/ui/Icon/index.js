import React from 'react'
import {FaUserFriends, FaRegSun} from 'react-icons/fa'

const Icon = ({name}) => {
  const icons = {
    users: <FaUserFriends />,
    settings: <FaRegSun />,
  }

  return icons[name]
}

export default Icon