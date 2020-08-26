import React, { Component } from 'react'
import axios from 'axios';

class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts : [],
       errorMsg : '',
    }
  }

  /** 
  # executed when the component executed for the first time &
  only executed once during component life time
  
  # perfect place for http get requests */

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      console.log(response)
      this.setState({posts : response.data})
    })
    .catch(error => {
      console.log(error)
      this.setState({errorMsg : 'Error in retrieving data'})
    })
  }
  

  render() {
    const {posts, errorMsg} = this.state

    return (
      <div>
        List of Posts
        {
          posts.length ?
          posts.map(post => <div key={post.id}>{post.body}</div>) : null
        }
        { errorMsg ? <div>{errorMsg}</div> : null}        
      </div>
    )
  }
}

export default PostList
