// library imports
import {useContext, useMemo} from 'react'

// component imports
import AreaPopupHeader from './AreaPopupHeader'
import AreaPopupContent from './AreaPopupContent'

// helpers & state imports
import {MapContext, MapProviderValue} from '../../../../providers/mapProvider'

// styles import
import '../../styles/popupStyles.scss'

// type imports
import {FieldType} from '../../../../types/fields/FieldTypes'


type AreapPopupProps = {
  field: FieldType
}

const AreaPopup = ({field}: AreapPopupProps) => {
  const {id, designator, center} = field
  const {soils} = useContext<MapProviderValue>(MapContext)
  const AreaSoils = useMemo(() => soils.items.filter(soil => soil.partfield_id === id)[0], [soils, id])
  const hasPopup = !!AreaSoils

  return (
    <div className='area-popup'>
      <AreaPopupHeader hasPopup={hasPopup} designator={designator} />
      <AreaPopupContent id={id} center={center} AreaSoils={AreaSoils} />
    </div>
  )
}

export default AreaPopup