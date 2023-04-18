import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0 
      }
    }

    increment(){
      // this.setState(
      //   {
      //     count: this.state.count + 1
      //   },

      //   ()=>{
      //     console.log('callback value',this.state.count)
      //   }
      // ) //comment out this for incrementFive()

      this.setState((prevState,props) =>({
        count:prevState.count + 1
        // count:prevState.count + props.addValue

      }))
      console.log(this.state.count)
    }

    incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()

    }
    
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        {/* <button onClick={()=>this.increment()}>Increment</button> */}
        <button onClick={()=>this.incrementFive()}>Increment</button>

      </div>
    )
  }
}

export default Counter
