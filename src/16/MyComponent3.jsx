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

function MyComponent3() {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    console.log('EVENT LISTENER ADDED')

    return () => {
      window.removeEventListener('resize', handleResize)
      console.log('EVENT LISTENER REMOVED')
    }
  }, [])

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`

  }, [width, height])

  function handleResize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  )
}

export default MyComponent3
