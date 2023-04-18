import React, { Component } from "react";

// function Greet1(){
//   return(
//     <h1>Hi mY name is vishwas</h1>
//     )
// }

// export default Greet1

//----------------------------------------------------------------------------------------------------------------

// class Greet1 extends Component{
//   render(){
//     return(
//       <h1>Hi MY Name is Anita</h1>
//     )
//   }
// }


//**************************************************** PROPS ****************************************************



class Greet11 extends Component{
    render(){
        return(

            <h1>Hello {this.props.middlename}</h1>
        )
    }

}

export default  Greet11

//******************************************* in class components destructuring props in render method*****************************

{/* <Greet11 name='Dhanashri' heroname='spiderman'/> */}

//1st way-destructing props inside the render method


//  class UseState extends Component {
//   render() {

//     const {name,heroname}=this.props
//     return (
//       <div>
//         {name} {heroname}
//       </div>
//     )
//   }
// }

// export default UseState


//----------------------------------------------------------------------------------------------------------------

// function Greet1(props) {
//   console.log(props);
//   return (
//     <div>
//       <h1>
//         Hello {props.number} is a {props.lastname} {props.middlename}{" "}
//         {props.name1} {props.curies}
//       </h1>

//       {props.children}
//     </div>
//   );
// }


//**************************** in function components destructuring props in the body and in the parameter **********************

      {/* <Greet11 name='Dhanashri' heroname='spiderman'/> */}

//There are 2 way inside the function for props destructring

      //1st way-> destructing props in the parameter
      
      // function Greet11({name,heroname}) {
      //   return (
      //     <div>{name} {heroname}</div>
      //   )
      // }
      
      // export default Greet11

      //2nd way-> destructuring props in the body

      
      // function UseState(props) {

      //   const {name,heroname}=props
      //   return (
      //     <div>
      //       {heroname} {name}
      //     </div>
      //   )
      // }
      
      // export default UseState

//There are 2 way inside the function for props destructring


//**************************************************** States ****************************************************

// import React, { Component } from 'react'

//  class Greet11 extends Component {

//     constructor(props) {
//       super(props)
    
//       this.state = {
//          message:'Welcome Please Subscribe to be my channel'
//       }
//     }

//       Changemessage=()=>{
//         this.setState({
//             message:'Thank you for subscribing'
//         })
           
        
//      }
    
//   render() {
//     return (
//       <div>
// <h1>{this.state.message}</h1>
// <button onClick={()=>this.Changemessage()}>Subscribe</button>
//       </div>
//     )
//   }
// }

// export default Greet11

//----------------------------------------------------------------------------------------------------------------
// import React, { Component } from 'react'

//  class Greet1 extends Component {

//   constructor(props) {
//     super(props)
  
//     this.state = {
//        count:0
//     }
//   }

//   Incremet(){
//     this.setState(
//       {
//       count:this.state.count + 1
//     },
    
//     ()=>{
//       console.log('callback value',this.state.count)
//     }
//     )
//     console.log(this.state.count)
// }
  

//   render() {
//     return (
//       <div>
//         <div> Count-{this.state.count}</div>
//         <button onClick={()=>this.Incremet()}>Count</button>
//       </div>
//     )
//   }
// }


// export default Greet1

//**************************************************** Event Handling ****************************************************



//  class UseState extends Component {

//   Increment(){
//     console.log("clicked button")
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.Increment}>Click me</button>
//       </div>
//     )
//   }
// }

// export default UseState





