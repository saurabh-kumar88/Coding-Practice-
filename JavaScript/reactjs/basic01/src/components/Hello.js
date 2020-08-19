import React from 'react'

const Hello = (props) => {

  console.log(props)
  return(
  <div>
    <h1>Hello {props.name}! a.k.a {props.heroname}</h1>
    {props.children}
  </div>
  );

  /*without using JSX*/
  // return React.createElement('div', {className : "dummyClass"}, React.createElement('h1', null, React.createElement('p', {id: "p1tag"}, "Nesting")  ,"Hello vishwas"))

}

export default Hello