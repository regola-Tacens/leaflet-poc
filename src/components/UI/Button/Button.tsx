// library imports
import React from 'react'
import {MouseEventHandler} from 'react'

// style imports
import './buttonStyles.scss'

type ButtonProps = {
  children: string | JSX.Element,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  size: 'small' |'medium' | 'large',
  width: number,
  variant: 'primary' | 'secondary'
}

const Button = ({children, onClick, size, width, variant} :ButtonProps) => {
  return (
    <button className={`custom-button ${size} color-${variant}`} style={{width: width}} onClick={onClick}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  size: 'medium',
  width: '100px',
  variant: 'primary'
}

export default Button