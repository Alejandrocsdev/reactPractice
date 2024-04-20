// useState() = Re-renders the component when the state value changes.

// useRef() = 'Use Reference' Does not cause re-renders when its value changes.
//            when you want a component to 'remember' some information,
//            but you don't want that information to trigger new renders.

//            1. Accessing/Interacting with DOM element
//            2. Handling Focus, Animations, and Transitions
//            3. Managing Timers and Intervals

import React, { useState, useEffect, useRef } from 'react'

function MyComponent() {
  // let [number, setNumber] = useState(0)
  const ref = useRef(0)
  const inputRef1 = useRef(null)
  const inputRef2 = useRef(null)
  const inputRef3 = useRef(null)
  console.log(ref)

  useEffect(() => {
    console.log('Component Rendered')
    console.log(inputRef1)
  })

  function handleClick1() {
    // setNumber(prevNumber => prevNumber + 1)
    ref.current++
    console.log(ref.current)
    inputRef1.current.focus()
    inputRef1.current.style.backgroundColor = 'yellow'
    const value = inputRef1.current.value
    console.log(value)
  }

  function handleClick2() {

    inputRef2.current.focus()
    inputRef2.current.style.backgroundColor = 'red'
  }

  function handleClick3() {

    inputRef3.current.focus()
    inputRef3.current.style.backgroundColor = 'blue'
  }

  return (
    <>
      <div>
        <button onClick={handleClick1}>Click Me 1</button>
        <input ref={inputRef1} />

        <button onClick={handleClick2}>Click Me 2</button>
        <input ref={inputRef2} />

        <button onClick={handleClick3}>Click Me 3</button>
        <input ref={inputRef3} />
      </div>
    </>
  )
}

export default MyComponent
