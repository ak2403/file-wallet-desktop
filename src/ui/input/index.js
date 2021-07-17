import React from 'react'

const Input = ({type, title, onChange, value}) => {
  const inputType = type || 'text';
  
  return <div>
    {title && <div data-testid="ss-input-title">
      {title}
    </div>}
    <input 
      data-testid="ss-input" 
      type={inputType} 
      value={value}
      onChange={e => onChange(e.target.value)} />
  </div>
}

export default Input