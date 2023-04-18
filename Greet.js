import React from 'react'

// function Greet(){
//     return <h1>Hello Vishwas</h1>
// }

//using Arrow Function

//export const Greet = ()=><h1>Hello Vishwas</h1>


//accepts arguments in the form of props from the app.js
// const Greet = (props)=>{
// return <h1>Hello {props.name} is the {props.heroName}</h1>
// }


//if i want to pass more than 1 Html element so use div tag & insted of selfclosing tag use end tag and create 1 new html element child in between

// const Greet = (props)=>{
//     return (
//         <div>
//         <h1>Hello {props.name} is the {props.heroName}</h1>
//         {props.children}
//         </div>
//     )
//     }

    //There are 2 ways to destructring the props in a functional component.

    //1)Destrure in the functional parameter itself.

    // const Greet = ({name,heroName})=>{
    //     return (
    //         <div>
    //         <h1>Hello {name} is the {heroName}</h1>
    //         </div>
    //     )
    //     }

    //Destructing in the function body

    const Greet = props=>{
        const {name, heroName}= props
        return (
            <div>
            <h1>Hello {name} is the {heroName}</h1>
            </div>
        )
        }
    

export default Greet;