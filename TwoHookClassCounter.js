// import React, { Component } from "react";

// class TwoHookClassCounter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0
//     }
//   }

//   incrementCount() {
//     this.setState((prevstate) => {
//       return {
//         count: prevstate.count + 1,
//       }
//     })
//   }

//   render() {
//     return <div>
//          count:{count}
//         <button onClick={()=>this.setState(this.state.count)}>Reset</button> 
//         <button onClick={()=>this.setState(prevCount=>prevCount+1)}>Increment</button>
//         <button onClick={()=>this.setState(prevCount=>prevCount-1)}>Decrement</button>
//         <button onClick={this.incrementCount}>count:{this.state.count}</button>
//     </div>
//   }
// }

// export default TwoHookClassCounter;
