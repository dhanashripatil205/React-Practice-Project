import React from "react";

function Example1() {
    const persons = [
            {
              id: 1,
              name: "Keshav",
              age: 20,
              skill: "fullstack",
            },
        
            {
              id: 2,
              name: "Madhav",
              age: 24,
              skill: "React",
            },
        
            {
              id: 3,
              name: "Kranti",
              age: 35,
              skill: "Anguler",
            },
        
            {
              id: 4,
              name: "Trishul",
              age: 30,
              skill: "Mongodb",
            }
          ]

          const personlist = persons.map(info=>(
          <h2 style={{color:'green',border:'2px solid red',backgroundColor:'cyan'}}>{info.id}  {info.name}</h2>
          
          
          ))

          return(
            <div>{personlist}</div>
          )
    }
export default Example1
