import React, { useState } from 'react'

function TreatmentMenu(props) {
  // const [props.treatActiveItem, setprops.treatActiveItem] = useState('Skin improvement')

  const handleItemClick = (item) => {
    props.setTreatActiveItem(item)
  }

  return (
    <div className="treatment-menu-container">
      <div
        className={`treatment-menu-item ${
          props.treatActiveItem === 'Injectables' ? 'active' : ''
        }`}
        onClick={() => handleItemClick('Injectables')}
      >
        Injectables
      </div>
      <div
        className={`treatment-menu-item ${
          props.treatActiveItem === 'Skin improvement' ? 'active' : ''
        }`}
        onClick={() => handleItemClick('Skin improvement')}
      >
        Skin improvement
      </div>
      <div
        className={`treatment-menu-item ${
          props.treatActiveItem === 'Hair removal' ? 'active' : ''
        }`}
        onClick={() => handleItemClick('Hair removal')}
      >
        Hair removal
      </div>
      <div
        className={`treatment-menu-item ${
          props.treatActiveItem === 'Soft surgery' ? 'active' : ''
        }`}
        onClick={() => handleItemClick('Soft surgery')}
      >
        Soft surgery
      </div>
      <div
        className={`treatment-menu-item ${
          props.treatActiveItem === 'Plastic surgery' ? 'active' : ''
        }`}
        onClick={() => handleItemClick('Plastic surgery')}
      >
        Plastic surgery
      </div>
    </div>
  )
}

export default TreatmentMenu
