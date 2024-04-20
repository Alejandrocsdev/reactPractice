// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
// (1)This component re-renders
// (2)This component mounts
// (3)This state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})
// Runs after every re-render

// 2. useEffect(() => {}, [])
// Runs only on mount

// 3. useEffect(() => {}, [value])
// Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, { useState, useEffect } from 'react'

function MyComponent2() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState('green')

  // useEffect(() => {
  //   document.title = `Count: ${count}`
  // })

  // useEffect(() => {
  //   document.title = `My Counter Program`
  // }, [])

  useEffect(() => {
    document.title = `Count: ${count} ${color}`

    return () => {
      // SOME CLEANUP CODE
    }
  }, [count, color])

  function addCount() {
    setCount((prevCount) => prevCount + 1)
  }

  function subtractCount() {
    setCount((prevCount) => prevCount - 1)
  }

  function changeColor() {
    setColor((prevColor) => prevColor === 'green' ? 'red' : 'green')
  }

  return (
    <>
      <p style={{color: color}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button><br />
      <button onClick={changeColor}>Change Color</button>
    </>
  )
}

export default MyComponent2
