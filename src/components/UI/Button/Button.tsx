// library imports
import React from 'react'
import {MouseEventHandler} from 'react'

// style imports
import './buttonStyles.scss'

type ButtonProps = {
  children: string | JSX.Element,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  size: 'small' |'medium' | 'large',
  width: number
}

const Button = ({children, onClick, size, width} :ButtonProps) => {
  return (
    <button className={`custom-button ${size}`} style={{width: width}} onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  size: 'medium',
  width: '100px'
}

export default Button