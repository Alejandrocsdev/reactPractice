function Food() {
  const food_01 = 'Orange'
  const food_02 = 'Banana'
  return (
    <ul>
      <li className="li">Apple</li>
      <li className="li">{food_01}</li>
      <li className="li">{food_02.toUpperCase()}</li>
    </ul>
  )
}

export default Food
