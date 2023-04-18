import React, { createElement } from "react";

//Code using Jsx 

const Hello = ()=>{
    return(
        <div>
        <h1>Hello Vishwas</h1>
        </div>
    )
}

//----------------------------------------------------------------------------------------------

//Code Using Without Jsx

// const Hello = ()=>{
//     return React.createElement(
//         'div',null,React.createElement('h1',null,'Hello Vishwas')
//     )
// }

//insted of null you can put object e.g. {id:'hello',className:'dummyClass'}

export default Hello