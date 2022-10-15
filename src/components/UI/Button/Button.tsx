// style imports
import { MouseEventHandler } from 'react'
import './buttonStyles.scss'

type ButtonProps = {
  children: string | JSX.Element, 
  onClick?: MouseEventHandler<HTMLButtonElement> 
}

const Button = ({children, onClick} :ButtonProps) => {
  return (
    <button className="custom-button" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button