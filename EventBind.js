import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
    }
    //setState method is used to change the message
    clickHandler(){
        this.setState({
            message: 'Goodbye '
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button>Click</button> */}
        {/* set clickHandler on button */}

        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    )
  }
}
export default EventBind
