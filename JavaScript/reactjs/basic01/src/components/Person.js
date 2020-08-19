import React from 'react'

function Person({item}) {
  return (
    <div>
      <h1>ID : {item.id} Name : {item.name} Age : {item.age} Skill : {item.skill}</h1>
    </div>
  )
}

export default Person
