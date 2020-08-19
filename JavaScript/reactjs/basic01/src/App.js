import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Messages from './components/Messages'
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import ChildComponent from './components/ChildComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import StyleSheet from './components/StyleSheet';
// import InlineStyles from './components/InlineStyles';
// import './components/appStyles.css'
// import styles from  './components/appStyles.module.css'
import Form from './components/Form'


class App extends Component{
  render(){
    return (
      <div className="App">
      
      {/**form and inputs handling */}
      <Form />

      {/**<InlineStyles />*/}
      {/**<h1 className="error">Error</h1>*/}
      {/**<h1 className={styles.success}>Success</h1>*/}
      {/*<StyleSheet primary={false} />*/}

      {/** <NameList />*/}
      {/** <UserGreeting />*/}
      {/**<ParentComponent /> */}
      {/** <EventBind />*/}
      {/**<ClassClick /> */}
      {/**<FunctionClick /> */}
      {/**<Counter /> */}
      {/** <Messages /> */}
      {/*<Greet first_name="saurabh" last_name="kumar"></Greet>*/}
      {/**<Welcome name="Bruce" heroname="Batman" className="bruce" ><p>The superhero Ninja, Guardian of Gotham city</p></Welcome> 
       <Welcome name="Diana" heroname="Wonder woman"><button>Submit</button></Welcome> 
       <Welcome name="Clark" heroname="Superman"><p>The Big Gun</p></Welcome> */}
      {
        /**<Hello name="Bruce" heroname="Batman"><p>The superhero Ninja, Guardian of Gotham city</p></Hello>
      <Hello name="Diana" heroname="Wonder woman"><button>Submit</button></Hello>
      <Hello name="Clark" heroname="Superman"/> */
      }
      </div>
  )};
}

export default App