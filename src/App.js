const React = require('react')
const dB = require('./components/db')
const ResourceForm = require('./pages/resources/form')
const Resources = require('./pages/resources/index')
const {BrowserRouter, Match, Link} = require('react-router')


const App = React.createClass({
  getInitialState(){
    return {
      resources: [],
      newResource: {
        title: '',
        source: '',
        _id: new Date().toISOString()
      }
    }
  },
  componentDidMount(){
    this.props.db.allDocs({include_docs: true},(err,res) => {
      if(err) return console.log(err.message)
      const resources = res.rows.map(o => o.doc)
      this.setState({resources: resources})
    })
  },
  updateResources(resources){
    this.setState({resources: resources})
  },
  render(){
    return (
    <BrowserRouter>
      <div>
        <h1>Gnosis</h1>
        <ResourceForm handleSubmit={this.updateResources} resources={this.state.resources} />
        <Resources resources={this.state.resources}/>
      </div>
    </BrowserRouter>
    )
  }
})

module.exports = dB(App)
