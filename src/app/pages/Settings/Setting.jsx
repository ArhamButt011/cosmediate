import React, { useState } from 'react'
import TreatmentMenu from '../../components/Settings/TreatMenu'
import TreatSubcategories from '../../components/Settings/TreatSubcategories'

const Setting = () => {
  const [activeItem, setActiveItem] = useState('Treatments')
  const [treatActiveItem, setTreatActiveItem] = useState('Skin improvement')

  const handleItemClick = (item) => {
    setActiveItem(item)
  }
  return (
    <div className="container">
      <div className="settings">
        <h1>Settings</h1>
        <div className="row">
          <div className="menu-container col-lg-4">
            <div
              className={`menu-item ${
                activeItem === 'General' ? 'active' : ''
              }`}
              onClick={() => handleItemClick('General')}
            >
              General
            </div>
            <div
              className={`menu-item ${
                activeItem === 'Password' ? 'active' : ''
              }`}
              onClick={() => handleItemClick('Password')}
            >
              Password
            </div>
            <div
              className={`menu-item ${activeItem === 'Price' ? 'active' : ''}`}
              onClick={() => handleItemClick('Price')}
            >
              Price
            </div>
            <div
              className={`menu-item ${
                activeItem === 'Treatments' ? 'active' : ''
              }`}
              onClick={() => handleItemClick('Treatments')}
            >
              Treatments
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mt-5">
              {activeItem === 'Treatments' && (
                <>
                  <h4>Treatments</h4>
                  <TreatmentMenu
                    setTreatActiveItem={setTreatActiveItem}
                    treatActiveItem={treatActiveItem}
                  />
                </>
              )}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="treat-subcategory">
              {treatActiveItem === 'Skin improvement' &&
                activeItem === 'Treatments' && <TreatSubcategories />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
