const React = require('react')

const dbUrl = process.env.REACT_APP_DB
const PouchDB = require('pouchdb-http')
const db = PouchDB(dbUrl)

const Db = Component => React.createClass({
  render(){
    return (
      <Component {...this.props} db={db} />
    )
  }
})

module.exports = Db
