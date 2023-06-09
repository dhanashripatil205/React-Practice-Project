//Fetching data with useEffect Part 2

import axios from "axios";
import React, { useState, useEffect } from "react";

 function Example7() {
  const [post, setPost] = useState({});
  const [id,setId] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((res)=>{
      console.log(res)
      setPost(res.data)
    })

    .catch((err)=>{
      console.log(err)
    })
  },[id]);
  return (
    <div>
        <input type="text" value = {id} onChange={e=>setId(e.target.value)}/>
      {post.title}
    </div>
  );
}

export default Example7