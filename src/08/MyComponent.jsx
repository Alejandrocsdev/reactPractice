import React, { useState } from 'react'
function MyComponent() {
  const [name, setName] = useState('Guest') // default
  const [age, setAge] = useState(0) // default
  const [isEmployed, setIsEmployed] = useState(false) // default

  const updateName = () => {
    setName('Alex')
  }

  const incrementAge = () => {
    setAge(age + 1)
  }

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed)
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>IsEmployed: {isEmployed ? 'Yes' : 'No'}</p>
      <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
  )
}
export default MyComponent
