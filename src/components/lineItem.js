const React = require('react')

module.exports = props =>
  <div>
    <li key={props.item._id}>
      <a href={props.item.reference} target="_blank">{props.item.title}</a>
    </li>
  </div>
