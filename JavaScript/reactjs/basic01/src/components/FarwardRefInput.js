import React from 'react'

// function FarwardRefInput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   )
// }

const FarwardRefInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
})


export default FarwardRefInput
