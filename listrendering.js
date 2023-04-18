// import React from "react";

// export default function Listrendering() {
//   const [count, setCount] = React.useState([1, 2, 3, 4, 5]);
//   const [name, setName] = React.useState(9);

//   return (
//     <div>
//       <button onClick={() => setCount((prevstate) => [...prevstate, 6, 7, 8, 9, 10])}>
//         Hello {count}
//       </button>
//       <button onClick={() => setName((prevstate) => [...prevstate, 19])}>
//         Click Me {name}
//       </button>

      
//     </div>
//   );
// }


import React from 'react'

export default function Listrendering() {

const names = ['jack','Dhanu','kriya']

const listrendering = names.map((name,index)=><h2 key={index}>{index}{name}</h2>)


  return (

    <div>{listrendering}</div>
  )
}
