import React from 'react';

// function ChildComponent({greemessage}) {
    function ChildComponent({greemessage}) {

	return (
		<div>
{/* <button onClick={greemessage}>Greet</button> */}
{
			<button onClick={()=>greemessage(1,2,3)}> 
			Greet Parent</button> }

		</div>
	)
}

export default ChildComponent;
