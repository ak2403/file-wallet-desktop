import React, {useState} from 'react'
import {FaEllipsisV} from 'react-icons/fa'
import './style.scss'

const Gear = ({menuItems = []}) => {
  const [display, toggleDisplay] = useState(false)

  return <div className="ss-list-options">
    <FaEllipsisV className="ss-list-icon" onClick={() => toggleDisplay(!display)} />
    <div className={`ss-list-menu ${display ? 'show' : 'hide'} `}>
      {menuItems.map(item => <div className="ss-list-menu-item" key={item.name} onClick={() => item.onClick()}>{item.title}</div>)}
    </div>
  </div>
}

const List = props => {
  const {data, menuOptions} = props
  
  return (<div>
    {data.map(item => {
        const {user} = item
        
        return <div className="ss-list-item" key={item._id}>
          <div className="ss-list-title">
            {user.email}
          </div>
          
          {menuOptions?.length && <Gear menuItems={menuOptions} />}
        </div>
      })}
  </div>)
}

export default List