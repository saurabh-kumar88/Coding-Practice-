import React, {Component} from 'react'

class Form extends Component {

    constructor(props){
        super(props);
        this.state = { Title: '', Imdb: ''};
    }


    handleChangeTitle = (event) => {
        this.setState({ Title: event.target.value });
    };

    handleChangeImdb = (event) => {
        this.setState({ Imdb: event.target.value });
    };


    submitForm = () => {
    
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
    
  }

  render(){
    const {Title, Imdb} = this.state;  
    return(
      <div class="w3-card-4">
        <div class="w3-container w3-green">
          <h2>Add Movie Title and Imdb ratings</h2>
        </div>
        <form class="w3-container" onSubmit={this.handleSubmit}>
        <p>
          <input class="w3-input"
          type="text"
          name="Title"
          id="Title"
          value={Title} // problem part --> when i assign value here then (as per shown in demo app) then <input tag does not take any value (obviously)
          onChange={this.handleChangeTitle} />
          <label htmlFor="Title">Title</label>
        </p>
        
        <p>
          <input class="w3-input"  
          type="text"
          name="Imdb"
          id="Imdb"
          value={Imdb}
          onChange={this.handleChangeImdb} />
          <label htmlFor="Imdb">Imdb Ratings</label>
        </p>
      </form>
      <input class="button blue font16x"
        type="button"
        value="Submit"
        onClick={this.submitForm}/>

      </div>
      
    );
  }
}

export default Form;