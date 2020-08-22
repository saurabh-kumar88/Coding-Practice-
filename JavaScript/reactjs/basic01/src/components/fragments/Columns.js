import React from 'react'

function Columns() {
  const books = [
    {
      id : 0,
      title : 'Jack Ryan vol 1',
      Author : 'Tom clancy'
    },

    {
      id : 1,
      title : 'The Amazing spider man vol 2',
      Author : 'Stan Lee'
    },

    {
      id : 2,
      title : 'The 3 idiots',
      Author : 'Chetan bhagat'
    },
  ]
  return (
    // <React.Fragment>
    //   <td>Name</td>
    //   <td>Saurabh</td>
    // </React.Fragment>

    <React.Fragment>
      {
        books.map( item => (
          <React.Fragment key={item.id}>
            <td>{item.title}</td>
          </React.Fragment>
        ))
      }
    </React.Fragment>
    

  )
}

export default Columns
