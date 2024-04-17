function Button() {
  // const handleClick = () => {
  //   console.log('OUCH!')
  // }

  // const handleClick2 = (name) => {
  //   console.log(`${name} stop clicking me`)
  // }

  // let count = 0
  // const handleClick3 = (name) => {
  //   if (count < 3) {
  //     count++
  //     console.log(`${name} you clicked me ${count} time/s`)
  //   } else {
  //     console.log(`${name} stop clicking me`)
  //   }
  // }

  const handleClick4 = (e) => {
    const target = e.target
    target.textContent = 'OUCH! 😐'
  }

  // return <button onClick={handleClick2('Alex')}>Click Me 😊</button> // invoke right away
  // return <button onClick={(e) => handleClick4(e)}>Click Me 😊</button>
  return <button onDoubleClick={(e) => handleClick4(e)}>Click Me 😊</button> // double click
}
export default Button
