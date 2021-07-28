import React from 'react'

const Input = ({type, title, onChange, value, isError}) => {
  const inputType = type || 'text';
  
  return <div>
    {title && <div data-testid="ss-input-title">
      {title}
    </div>}
    <input 
      className={`ss-input-field ${isError && 'ss-input-error'}`}
      data-testid="ss-input" 
      type={inputType} 
      value={value}
      onChange={e => onChange(e.target.value)} />
  </div>
}

export default Input