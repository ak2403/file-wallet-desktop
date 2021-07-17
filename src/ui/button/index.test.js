import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import Button from '.'

describe('Login Component with all props', () => {
  
  it('should render the button.', () => {
    const {queryByTestId} = render(<Button title="Login" />)
    const btn = queryByTestId('ss-button')

    expect(btn).toBeTruthy();
  })

  it('should match the button text.', () => {
    const {queryByTestId} = render(<Button title="Login" />)
    const btn = queryByTestId('ss-button')
    
    expect(btn.innerHTML).toBe("Login");
  })

  it('should click the function.', () => {
    const mockClick = jest.fn()
    const {queryByTestId} = render(<Button title="Login" onClick={mockClick} />)
    const btn = queryByTestId('ss-button')
    fireEvent.click(btn)
    
    expect(mockClick).toHaveBeenCalledTimes(1)
  })
})