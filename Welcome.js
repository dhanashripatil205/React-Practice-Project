import React, { Component } from 'react'

// class Welcome extends Component{
//     render(){
//         return <h1>Class Component</h1>
//     }
// }


//accepting the argument in the form of props.

// class Welcome extends Component{
//     render(){
//         return <h1>Welcome {this.props.name} a.c.k {this.props.heroName}</h1>
//     }
// }


 class Welcome extends Component {
  render() {
    const { name, heroName } = this.props
    // const { state1, state2 } = this.state

    return (
      <div>
        <h1>Welcome {name} a.k.a {heroName}</h1>
      </div>
    )
  }
}


export default Welcome;