import React, { useState } from 'react'

function TreatmentForm() {
  const [selectedTreatment, setSelectedTreatment] = useState('')
  const [temporaryTreatments, setTemporaryTreatments] = useState([])
  const [savedTreatments, setSavedTreatments] = useState([])

  const handleAddTreatment = () => {
    if (selectedTreatment && !temporaryTreatments.includes(selectedTreatment)) {
      setTemporaryTreatments([...temporaryTreatments, selectedTreatment])
      setSelectedTreatment('')
    }
  }

  const handleSave = () => {
    setSavedTreatments([...savedTreatments, ...temporaryTreatments])
    setTemporaryTreatments([])
  }

  const handleCancel = () => {
    setTemporaryTreatments([])
  }

  const deleteTreatment = (indexToDelete) => {
    setTemporaryTreatments(
      temporaryTreatments.filter((_, index) => index !== indexToDelete),
    )
  }

  const deleteSavedTreatment = (indexToDelete) => {
    setSavedTreatments(
      savedTreatments.filter((_, index) => index !== indexToDelete),
    )
  }

  return (
    <div className="treatment-form">
      <h5>Skin improvements {`(${savedTreatments.length})`}</h5>
      <p>Treatments</p>

      <ul className="treatments-list mb-0">
        {temporaryTreatments.map((treatment, index) => (
          <div className="d-flex justify-content-between">
            <li className="treatments" key={index}>
              {treatment}
            </li>
            <button className="dlt-btn" onClick={() => deleteTreatment(index)}>
              X
            </button>
          </div>
        ))}
      </ul>

      <ul className="treatments-list">
        {savedTreatments.map((treatment, index) => (
          <div className="d-flex justify-content-between">
            <li className="treatments" key={index}>
              {treatment}
            </li>
            <button
              className="dlt-btn"
              onClick={() => deleteSavedTreatment(index)}
            >
              X
            </button>
          </div>
        ))}
      </ul>
      <div className="form-parent">
        <select
          className="form-select"
          value={selectedTreatment}
          onChange={(e) => setSelectedTreatment(e.target.value)}
        >
          <option value="" disabled>
            Select a treatment
          </option>
          <option value="Physiotherapy">Physiotherapy</option>
          <option value="Dental Care">Dental Care</option>
          <option value="General Checkup">General Checkup</option>
          <option value="Cardiology">Cardiology</option>
        </select>

        <button
          className="btn plus-btn "
          type="button"
          onClick={handleAddTreatment}
        >
          +
        </button>
      </div>

      <div className="btn-parent">
        <button className="btn cancel-btn" type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn save-btn" type="button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  )
}

export default TreatmentForm
