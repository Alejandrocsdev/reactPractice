import React, { useState } from 'react'
function Counter() {
  const [count, setCount] = useState(0)
  // const increment = () => {
    // use the CURRENT state to count the NEXT state
    // setCount(count + 1)
    // setCount(count + 1)
  // }
    const increment = () => {
    // use the PENDING state to count the NEXT state
    // React puts your updater function in a queue (waiting in line)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
  }
  const decrement = () => {
    setCount(prevCount => prevCount - 1)
    setCount(prevCount => prevCount - 1)
    setCount(prevCount => prevCount - 1)
  }
  const reset = () => {
    setCount(0)
  }
  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="count-button" onClick={decrement}>
        Decrement
      </button>
      <button className="count-button" onClick={reset}>
        Reset
      </button>
      <button className="count-button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}

export default Counter
