import React from 'react'

const Button = props => {
  const {title, onClick} = props;

  return <div>
    <button data-testid="ss-button" onClick={onClick}>{title}</button>
  </div>
}

export default Button