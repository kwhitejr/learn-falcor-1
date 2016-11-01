import React from 'react'
import model from './model.js'

class NamesList extends React.Component {
  constructor() {
    super()
    this.state = {names: {}}
  }

  componentWillMount() {
    this.update()
  }

  update() {
    model.getValue(['names', 'length'])
      .then(length => model.get(['names', {from: 0, to: length-1}]))
      .then(response => this.setState({names: response.json.names}))
  }

  render() {
    const names = Object.keys(this.state.names).map(idx => {
      return <li key={idx}>{this.state.names[idx].name}</li>
    })

    return (
      <ul>{names}</ul>
    )
  }
}