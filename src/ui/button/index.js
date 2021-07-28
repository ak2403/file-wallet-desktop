import React from 'react'

const Button = props => {
  const {title, onClick, className, rightImg, rightImgClass} = props;

  return <div>
    <button className={className} data-testid="ss-button" onClick={onClick}>
      {title}{rightImg && <img className={rightImgClass} src={rightImg} alt="button right icon" />}
    </button>
  </div>
}

export default Button