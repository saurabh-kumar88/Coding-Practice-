import React  from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Title</th>
        <th>Imdb</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) =>{
  const rows = props.moviesData.map((row, index)=> {
    return  (
      <tr key={index}>
      <td>{row.Title}</td>
      <td>{row.Imdb}</td>
      <td>
        <button class="button green font16x" onClick={() => 
        props.removeTitle(index)}>Delete</button>
      </td>
      </tr>
    )
  })
  
  return <tbody>{rows}</tbody>
}


// class Table2 extends Component {
  
//   render(){
//     const {moviesData} = this.props
    
//     return(
//       <table id="css_table">
//         <TableHeader />
//         <TableBody moviesData = {moviesData} />
//       </table>
//     )
//   }

// }

const Table2 = (props) => {
  const {moviesData, removeTitle} = props
  return (
    <table id="css_table">
      <TableHeader />
      <TableBody moviesData={moviesData} removeTitle={removeTitle} />
    </table>
  )
}


export default Table2