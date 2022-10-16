// library imports
import {ReactNode} from 'react'

// component imports
import Areas from './Areas'

type FieldsProps = {
  children: ReactNode
}

const Fields = ({children}: FieldsProps) => {
  return (
    <div className='fields'>
      {children}
    </div>
  )
}

Fields.Areas = Areas

export default Fields