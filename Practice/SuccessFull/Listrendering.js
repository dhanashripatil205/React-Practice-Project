import React, { useState ,useEffect} from 'react'
import Name from './Name'



 function Listrendering() {

  const names=[{

    
    name:'Dhanashri',
    id:1,
    description:'react'
  },
  {
    name:'PrathMesh',
    id:2,
    description:'Java'
  },

  {
    name:'Kriya',
    id:3,
    description:'CSS'
  }]

const nameList= names.map(name=><Name key={name.id} name={name} ></Name>)

  return (
    <div>
{nameList}

    </div>
  )
}



// function Listrendering() {
//   const [numbers,setNumber]=useState([1,2,3,4,5])
//   return (
//     <div >
// {numbers.map((number)=>(<div style={{color:'red',backgroundColor:'green',marginTop:'50px'}}>{number}</div>))}
//     </div>
//   )
// }


// const initialColors = ['red', 'blue', 'green', 'yellow'];
// const initialBgColor = 'white';

// function Listrendering() {
//   const [colors, setColors] = useState(initialColors);
//   const [bgColor, setBgColor] = useState(initialBgColor);

//   function handleBgColorChange() {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     setBgColor(`#${randomColor}`);
//   }

//   return (
//     <div style={{ backgroundColor: bgColor }}>
//       {colors.map(color => (
//         <div
//           key={color}
//           style={{ backgroundColor: color, padding: '10px', margin: '10px' }}
//         >
//           {color}
//         </div>
//       ))}
//       <button onClick={handleBgColorChange}>Change background color</button>
//     </div>
//   );
// }



// function Listrendering() {

// const [arrays,setArray]=useState([1,2,3,4,5,6,7,8])


//   return (
//     <div style={{color:'red',border:'1px solid grey'}}>
//       {arrays.map((item,index)=>(<h1 style={{border:'1px solid grey'}} key={index}>{item}</h1>))}
//     </div>
//   )
// }


// function Listrendering({time}) {

//   const [count, setCount] = useState(time);

//   useEffect(() => {
//     const timer = count > 0 && setInterval(() => setCount(count - 1), 1000);
//     return () => clearInterval(timer);
//   }, [count]);

//   return <div>{count}</div>;
// }




//     const [name,setName]=useState('')
//     const [email,setEmail]=useState('')
//     const [password,setPassword]=useState('')

    
//   const handleSubmit = () => {
//     alert(`Name: ${name} Email: ${email}\nPassword: ${password}`);
//   };

//     return(
//         <div>

//             <form onSubmit={handleSubmit}>
//             Name:
        
//         <input type='name' value={name} onChange={e=>setName(()=>e.target.value)}></input>
//         Email:
//         <input type='email' value={email} onChange={e=>setEmail(()=>e.target.value)}></input>
//         Password:

//         <input type='password' value={password} onChange={e=>setPassword(()=>e.target.value)}></input>

//         <button type='submit button' >Submit</button>

//         </form>

//         </div>
//     )

// }

//     const [counter,setCounter]=useState(0)

//     useEffect(()=>{
//         document.title=`Counter ${counter}`
//         setTimeout(()=>{
//             setCounter((prev)=>prev+1)
//         },1000)
//     },[counter])
//     return(
//         <div>
// {counter}
//         </div>
//     )
// }

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isEmailValid, setIsEmailValid] = useState(false);
//   const [isPasswordValid, setIsPasswordValid] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Email: ${email}\nPassword: ${password}`);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//     setIsEmailValid(event.target.checkValidity());
//   };

//   const handlePasswordChange= (event) => {
//     setPassword(event.target.value);
//     setIsPasswordValid(event.target.checkValidity());
//     };
    
//     return (
//     <form onSubmit={handleSubmit}>
//     <label>
//     Email:
//     <input type="email" value={email} onChange={handleEmailChange} required />
//     </label>
//     {!isEmailValid && <p>Please enter a valid email</p>}
//     <label>
//     Password:
//     <input type="password" value={password} onChange={handlePasswordChange} minLength={6} required />
//     </label>
//     {!isPasswordValid && <p>Password must be at least 6 characters long</p>}
//     <button type="submit">Submit</button>
//     </form>
//     );
//     }


//   const [quote, setQuote] = useState('');

//   useEffect(() => {
//     fetch('https://api.quotable.io/random')
//       .then(response => response.json())
//       .then(data => setQuote(data.content));
//   }, []);

//   return (
//     <div>
//       <p>Random quote: {quote}</p>
//     </div>
//   );
// }



//   const [showMessage, setShowMessage] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShowMessage(!showMessage)}>
//         {showMessage ? 'Hide message' : 'Show message'}
//       </button>
//       {showMessage && <p>This is a message.</p>}
//     </div>
//   );
// }


    //   const [countdown, setCountdown] = useState(10);
    
    //   useEffect(() => {
    //     if (countdown > 0) {
    //       const timer = setTimeout(() => {
    //         setCountdown(countdown - 1);
    //       }, 1000);
    //       return () => clearTimeout(timer);
    //     }
    //   }, [countdown]);
    
    //   return (
    //     <div>
    //       <p>Countdown: {countdown}</p>
    //     </div>
    //   );
    // }
    


//     const [color,setColor]=useState(false)

// function toggleName(){
//     setColor(()=>!color)
// }
// return(

// <>
// <button onClick={toggleName}>
//     {!color? 'green' : 'red'}
// </button>
// <p>{!color? 'red' : 'green'}</p>
// </>


// )
// }


// const [name,setName]=useState(false)

// function toggleName(){
//     setName(()=>!name)
// }
// return(

// <>
// <button onClick={toggleName}>
//     {!name? 'ChangeName' : 'dontChange'}
// </button>
// <p>{!name? 'dontChange' : 'ChangeName'}</p>
// </>


// )
// }



//   const [isActive, setIsActive] = useState(false);

//   const toggleIsActive = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <div>
//       <button onClick={toggleIsActive}>
//         {isActive ? 'Deactivate' : 'Activate'}
//       </button>
//       <p>{isActive ? 'Active' : 'Inactive'}</p>
//     </div>
//   );
// }


//     const [array, setArray]= useState([
//         {number:1,color:'red',width:'20px',height:'20px'},
//         {number:2,color:'Green',width:'20px',height:'20px'},
//         {number:3,color:'grey',width:'20px',height:'20px'},
//         {number:4,color:'cyan',width:'20px',height:'20px'},
//         {number:5,color:'pink',width:'20px',height:'20px'}

//     ])

//   return (
//     <div>
// {array.map((num)=>(<div key={num.number} style={{color:num.color , height:num.height}}>{num.number}</div>))}

//     </div>
//   )
// }

export default Listrendering