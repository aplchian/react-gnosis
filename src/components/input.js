const React = require('react')

module.exports = props =>
    <div>
      <label>{props.title}</label>
      <input
        onChange={props.onChange}
        value={props.value} />
    </div>
