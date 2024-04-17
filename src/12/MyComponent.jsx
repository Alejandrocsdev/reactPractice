import React, { useState } from 'react'

function MyComponent() {
  const [car, setCar] = useState({ year: 2024, make: 'Ford', model: 'Mustang' })

  function handleYearChange(e) {
    setCar((prevCar) => ({ ...prevCar, year: e.target.value }))
    // setCar({ year: 2024, make: 'Ford', model: 'Mustang', year: 2025 })
  }

  function handleMakeChange(e) {
    setCar((prevCar) => ({ ...prevCar, make: e.target.value }))
  }

  function handleModelChange(e) {
    setCar((prevCar) => ({ ...prevCar, model: e.target.value }))
  }

  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <input type="text" value={car.model} onChange={handleModelChange} />
    </div>
  )
}

export default MyComponent
