import React, { Component } from 'react'

 class ConditionallyRunEffects extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    componentDidMount(){
        document.title = `clicked ${this.state.count} times`

    }

    componentDidUpdate(preprops,prevstate){
        document.title = `clicked ${this.state.count} times`

    }
    
  render() {
    return (
      <div>
        <button onClick={this.setState({count:this.state.count+1})}>Click {this.state.count}</button>
      </div>
    )
  }
}

export default ConditionallyRunEffects
