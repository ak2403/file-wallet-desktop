import React from 'react'

const Startup = props => {
  return (<div className="ss-main-view">
    <div className="ss-main-banner">
      <h4>Share Space</h4>
      <p>Access and manage your files from anywhere you want.</p>
      <div className="ss-list-journey">
        <ul>
          <li>Login</li>
          <li>Setup your device</li>
          <li>Finish</li>
        </ul>
      </div>
      <div className="ss-version">
        Version 0.1.0
      </div>
    </div>

    <div className="ss-main-content">
      {props.children}
    </div>
  </div>)
}

export default Startup