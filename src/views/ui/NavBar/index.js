import React from 'react'
import Icon from '../Icon'
import './style.scss'

const NavBar = props => {
  const {menu, active, onMenuClick} = props;

  return <div className="ss-nav-bar">
    {menu.map((item, index) => (<div className={`ss-nav-item ${active === item.name && 'ss-nav-active'}`} key={`nav${index}`} onClick={() => onMenuClick(item?.name)}>
      <span className="ss-nav-icon">
        <Icon name={item.name} />
      </span>
      {item.title}
      </div>)
    )}
  </div>
}

export default NavBar