import React from 'react'
import ReactDom from 'react-dom'

import NameAdder from './name-adder.jsx'
import NameList from './names-list.jsx'

class NameManager extends React.Component {
  handleNameAdded() {
    this.refs.namesList.update()
  }

  render() {
    return (
      <div>
        <NameAdder onAdded={this.handleNameAdded.bind(this)} />
        <NamesList ref="namesList" />
      </div>
    )
  }
}

ReactDom.render(<NameManager/>, document.querySelector('#demo'))