//Fetching data with useEffect Part 3

//Fetching data with useEffect Part 2

import axios from "axios";
import React, { useState, useEffect } from "react";

 function Example9() {
  const [post, setPost] = useState({});
  const [id,setId] = useState(1)
  const [idFromButtonClick, setIDFromButtonClick]=useState(1)

const handleClick = ()=>{
    setIDFromButtonClick(id)
}

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=>{
      console.log(res)
      setPost(res.data)
    })

    .catch((err)=>{
      console.log(err)
    })
  },[idFromButtonClick]);
  return (
    <div>
        <button type="button" onClick={handleClick}>Fetch Data</button>
        <input type="text" value = {id} onChange={e=>setId(e.target.value)}/>
      {post.title}
    </div>
  );
}

export default Example9