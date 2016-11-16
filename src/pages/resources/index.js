
const React = require('react')
const LineItem = require('../../components/lineItem')

module.exports = props => {
  const li = item => {
    console.log(item)
    return <LineItem item={item} />
  }
  return (
    <div>
      <h2>Resources</h2>
      <ul>
        {props.resources.map(li)}
      </ul>
    </div>

  )
}
