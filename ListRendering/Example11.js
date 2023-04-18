import React, { Component } from 'react'

 class Example11 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }

  Incremet(){
    this.setState(
      {
      count:this.state.count + 1
    },
    
    ()=>{
      console.log('callback value',this.state.count)
    }
    )
    console.log(this.state.count)
}
  

  render() {
    return (
      <div>
        <div> Count-{this.state.count}</div>
        <button onClick={()=>this.Incremet()}>Count</button>
      </div>
    )
  }
}

export default Example11