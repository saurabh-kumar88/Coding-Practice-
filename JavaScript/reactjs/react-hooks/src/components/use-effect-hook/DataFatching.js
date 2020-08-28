import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFatching() {
  
  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  // const [posts, setPosts] = useState([])
  // const [clickFetchAll, set] 
  
  const handleClick = () => {
    setIdFromButtonClick(id)
  }

  // const handleFetchAll = () => {

  // } 

  useEffect( ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
      console.log(res)
      setPost(res.data)
    })
    .catch(err => {
      console.log(err)
    }) 
  },[idFromButtonClick])

  // fetch all
  // useEffect( ()=> {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts`)
  //   .then( res => {
  //     console.log(res)
  //     setPosts(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  // },[])



  return (
    <div>
      <input type="text" value={id} onChange={e => setId(e.target.value)} />
      <button type='button' onClick={handleClick} >Fetch post</button>
        
        {/**
          <div>Feth All Posts
          <button type="text" onClick={handleFetchAll}>Fetch All</button>
          <ul>
            {
              posts.map(post => <li key={post.id}>{post.title}</li>)
            }
          </ul>
        </div>
         */}
      

      <div>{post.title}</div>
    </div>
  )
}

export default DataFatching
