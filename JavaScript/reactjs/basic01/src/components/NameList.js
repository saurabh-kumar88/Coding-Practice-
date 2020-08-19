import React from 'react'
import Person from './Person';
/**
 * Lists and Keys
   1. A 'key' is a special string attribute you need to include when creating list of elements
   2. Keys gives the elements a stable identity
   3. Keys helps react to identify which items have changed, are added, or are removed.
   4. Helps in efficient updated of the UI.
   
 * 
 * Index as key
 *when to use array index as key
  1. The items in your list do not have a unique id.
  2. The list is a static list and will not change.App
  3. The list will never be reordered or filtered
  note: try avoid to use index as key, let it be your last resort. 
 */


function NameList() {
  
  const persons = [
    {
      id: 1,
      name:"Diana",
      age:35,
      skill:"react",
    },
    {
      id: 2,
      name:"Bruce",
      age:45,
      skill:"angular",
    },
    {
      id: 3,
      name:"Clark",
      age:40,
      skill:"Vue",
    },
  ]
  
  
  const personsList = persons.map(item => <Person key={item.id} item={item}/> )

  const names = ['Diana', 'Bruce', 'Clark', 'Diana']
  const namesList = names.map((item, index) =><h1 key={index}>{index} {item}</h1>)
  
  
  
  
  
  return (
    <div> heros name {namesList}</div>
    // <div>persons List {personsList}</div>
    
  )
}

export default NameList
