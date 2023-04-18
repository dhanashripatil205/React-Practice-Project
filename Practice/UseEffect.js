import React, { useEffect } from "react";
import { useState } from "react";



//----------------------------------------------------------------------------------------------------------------

// function UseEffect() {
//   const [name,setName] = useState('Taylor')
//   const [age, setAge]= useState(0)
//   return (
//     <div>
//       <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
// <button onClick={()=>setAge((prev)=>prev+1)}>Increment Age{age}</button>
// <p>
// hello {name},Your age is {age}

// </p>
//     </div>
//   )
// }

// export default UseEffect

//----------------------------------------------------------------------------------------------------------------
// function UseEffect() {
//   const [liked, setLiked] = useState(true)

//   function handlechange (event){
//     setLiked(event.target.value)
//   }
//   return (
//     <div>
//       <label>
//       <input type="checkbox" value={liked} onChange={handlechange}/>
//       I Liked This.
//       <p>You {liked?'liked':'did not like'} this.</p>
//       </label>
//     </div>
//   )
// }

// export default UseEffect



//-------------------------------------------------------------------------------------------------------
// function UseEffect() {

//   const [count,setCount]=useState(0)

//   useEffect(()=>{
//     setTimeout(()=>{
      
//         setCount((prev)=>prev+1)
      

//     },1000)
//   })

//   return (
//     <div>
//       <button onClick={setCount}> {count}</button>
//     </div>
//   )
// }

// export default UseEffect

//----------------------------------------------------------------------------------------------------------------

// function UseEffect() {

//   const [name, setName]=useState({FirstName:'',LastName:'' , condition:true})

//   function Change(){
// setName((prev)=>({...prev,FirstName:name.LastName,LastName:name.FirstName}))
//   }

//   function Condition(){
// setName((pre)=>({...pre,condition:false}))
//   }

//   return (
//     <div>
//      { name.condition?(
//       <div>FirstName {name.FirstName}
//       <div>lastName {name.LastName}</div>

//       <button onClick={Change}>Change</button>
//       ):(
//       <h1>My dgree is sce.</h1>)
//       <button onClick={Condition}>submit</button>
      
//     </div>
//   )
// }

// export default UseEffect


// function UseEffect() {

//   const [x,setX] = useState(0)
//   const [y,setY] = useState(0)

//   useEffect(()=>{
//     console.log('Use-Effect Value')
//     window.addEventListener('mouseover',mouseLog)
//   }, [])

//   function mouseLog(e){
//     console.log('MouseLog')
// setX(e.clientX)
// setY(e.clientY)

//   }

//   return (
//     <div>
//       x- {x} y - {y}
//     </div>
//   )
// }

// export default UseEffect

//-----------------------------------------------------------------------------------------------------------
// function UseEffect() {

//   const [count, setCount]=useState(0)
//   const [name,setName]=useState('')

//   useEffect(()=>{
//     console.log('useefftct-Updating document title')
// document.title=`clicked ${count} times`
//   },[count])
//   return (


//     <div>
//       <input type="text" value={name} onChange={(e)=>setName(()=>e.target.value)}/>
//       <button  onClick={()=>setCount((pre)=>pre+1)}>clicked {count} times</button>
//     </div>
//   )
// }

// export default UseEffect

//-----------------------------------------------------------------------------------------------------------

// function UseEffectExample() {
//   const [name, setName] = useState({ firstName: "", lastName: "" });

//   useEffect(()=>{

// //    document.title=(`${name.firstName}`)

// if(name.firstName.length===name.lastName.length){
//     console.log('length is same')
// }
    
//   },[name])
//   return (
//     <div>
//       <input
//         type="text"
//         value={name.firstName}
//         onChange={(e) =>
//           setName((prevState) => ({ ...prevState, firstName: e.target.value }))
//         }
//       ></input>
//       <input
//         type="text"
//         value={name.lastName}
//         onChange={(e) =>
//           setName((prevState) => ({ ...prevState, lastName: e.target.value }))
//         }
//       ></input>

//       <h1>Your firstName is: {name.firstName}</h1>
//       <h1>Your lastName is: {name.lastName}</h1>
//     </div>
//   );
// }

// export default UseEffectExample;

//-------------------------------------------------------------------------------------------------------------------
// function UseEffect() {
//     const [count,setCount] = useState(0)

//     useEffect(()=>{
//         document.title= `clicked ${count} times`
//     } ,[])

//     useEffect(()=>{
//         if(count<10){
//             console.log('Congrats')
//         }else{
//             return()=>{
//                 console.log('component is unmounted.')
//             }
//         }
//     },[count])
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount((prevcount)=>prevcount+1)}>Increment</button>
//         <button onClick={()=>setCount((prevcount)=>prevcount-1)}>Decrement</button>

//     </div>
//   )
// }

// export default UseEffect
