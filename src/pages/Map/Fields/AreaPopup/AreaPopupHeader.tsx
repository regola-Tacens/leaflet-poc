type AreaPopupHeaderProps = {
  designator: string,
  hasPopup: boolean
}

const AreaPopupHeader = ({designator, hasPopup}: AreaPopupHeaderProps) => {
  return (
    <>
      <h3 className='area-popup__title'>{designator}</h3>
      {!hasPopup && <h3>Sorry, There are no listed soils for this field</h3>}
    </>
  )
}

export default AreaPopupHeader