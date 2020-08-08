import React, {Component} from 'react'
import Table from './Table'
import List from './List'
import Table2 from './Table2'
import Form from './Form'


class App extends Component {
   state = {
    movies : [
    ]
  }
  removeTitle = (index) => {
    const {movies} = this.state
    
    this.setState({
      movies: movies.filter((movie, i)=>{
        return i !== index
      }),
    })
  }

  handleSubmit = (movie) => {
    this.setState({movies: [...this.state.movies, movie]})
  }


  render(){
    

    // const movies = [
    //   {
    //     Title: 'Never say again (1969)',
    //     Imdb: '8.6',
    //   },
    //   {
    //     Title: 'Tomorrow never die (1986)',
    //     Imdb: '8.3',
    //   },
    //   {
    //     Title: 'The GodFather (1971)',
    //     Imdb: '10',
    //   },
      
    // ]

    const { movies } = this.state
    
    return(
      <div className="container">
        <h1>Hello, React!</h1>
          <Table />
          <List />
          <Table2 moviesData={movies} removeTitle={this.removeTitle}/>
          <Form handleSubmit={this.handleSubmit} />

      </div>
    )
  }

}

export default App