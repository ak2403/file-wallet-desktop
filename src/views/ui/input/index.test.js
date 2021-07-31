import React from 'react'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '.'

describe('Input Component with all props', () => {
  
  it('should render the input.', () => {
    const {queryByTestId} = render(<Input />)
    const input = queryByTestId('ss-input')

    expect(input).toBeTruthy();
  })

  it('should render the input with title.', () => {
    const {queryByTestId} = render(<Input title="Login" />)
    const inputTitle = queryByTestId('ss-input-title')

    expect(inputTitle).toBeTruthy();
  })

  it('should call onChange function.', () => {
    const expectedOutput = 'share'
    let outputValue = ''
    const onChange = jest.fn().mockImplementation((value) => {
      outputValue = value
    })
    const {queryByTestId} = render(<Input title="Login" onChange={val => onChange(val)} />)
    const inputTitle = queryByTestId('ss-input')
    userEvent.type(inputTitle, expectedOutput)
    
    expect(onChange).toBeCalledTimes(expectedOutput.length)
    expect(outputValue).toBe(expectedOutput);
  })
})