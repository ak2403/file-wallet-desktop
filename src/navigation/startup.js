import React from 'react'
import BG from '../views/assets/images/bg.png'

const Startup = props => {
  return (<div className="ss-main-view">
    <div className="ss-main-banner">
      <div className="ss-list-journey">
        <img className="ss-bg-image" src={BG} />
      </div>
      <div className="ss-version">
        Version 0.1.0
      </div>
    </div>

    <div className="ss-main-content">
      <div className="ss-ui-content">
      <h4>Share Space</h4>
      <p>Access and manage your files from anywhere you want.</p>
      </div>
    
      {props.children}
    </div>
  </div>)
}

export default Startup