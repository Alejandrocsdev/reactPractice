import PropTypes from 'prop-types'

function List(props) {
  // (1)
  // const fruits = [
  //   { id: 1, name: 'apple', calories: 95 },
  //   { id: 2, name: 'orenge', calories: 45 },
  //   { id: 3, name: 'banana', calories: 105 },
  //   { id: 4, name: 'coconut', calories: 159 },
  //   { id: 5, name: 'pineapple', calories: 37 }
  // ]
  // fruits.sort((a, b) => a.name.localeCompare(b.name))
  // fruits.sort((a, b) => b.name.localeCompare(a.name))
  // fruits.sort((a, b) => a.calories - b.calories)
  // fruits.sort((a, b) => b.calories - a.calories)

  // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
  // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100)

  // (2)
  const category = props.category
  const itemList = props.items

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;<b>{item.calories}</b>
    </li>
  ))
  return (
    <>
      <h3>{category}</h3>
      <ul>{listItems}</ul>
    </>
  )
}
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number })
  )
}
List.defaultProps = {
  category: 'Category',
  items: []
}
export default List
