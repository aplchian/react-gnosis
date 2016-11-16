const React = require('react')
const {append,prepend} = require('ramda')
const Input = require('../../components/input')
const SubmitButton = require('../../components/submitButton')
const dB = require('../../components/db')
const {BrowserRouter, Match, Link} = require('react-router')

const ResourceForm = React.createClass({
  getInitialState(){
    return {
      error: '',
      result: {},
      resource: {
        title: '',
        reference: '',
        _id: new Date().toISOString()
      }
    }
  },
  clearInput(){
    this.setState({resource:{
      title: '',
      reference: '',
      _id: new Date().toISOString()
    }})
  },
  handleChange(field){
    return e => {
      let resource = this.state.resource
      resource[field] = e.target.value
      this.setState({resource})
    }
  },
  handleSubmit(e){
    e.preventDefault()
    this.props.db.put(this.state.resource,(err,result) => {
      if(err) return this.setState({error: err.message})
      const updatedResources = prepend(this.state.resource,this.props.resources)
      this.props.handleSubmit(updatedResources)
      this.clearInput()
    })
  },
  render(){
    return (
        <form onSubmit={this.handleSubmit}>
          <Input title="Title" onChange={this.handleChange('title')} value={this.state.resource.title}/>
          <Input title="Resource" onChange={this.handleChange('reference')} value={this.state.resource.reference}/>
          <SubmitButton />
        </form>

    )
  }
})

module.exports = dB(ResourceForm)
