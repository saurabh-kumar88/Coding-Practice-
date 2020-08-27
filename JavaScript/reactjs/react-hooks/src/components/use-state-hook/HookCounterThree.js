import React, {useState} from 'react'
/**while working with useState, the setter(setName) function does not automatically merge & update the object, which is passed as state variable 
 we have to manually merge an update the object using the merge operator (...)
*/
function HookCounterThree() {
  const [name, setName] = useState({firstName : '', lastName : ''})
  return (
    <div>
      <form>
        <input type="text" placeholder="first name" 
        value={name.firstName}
        onChange={e => setName({...name, firstName : e.target.value })} /> {/** ...name(i.e spread operator) First make the exact replica of name object, & then only update the firstName property */}
        
        <input type="text" placeholder="last name"
        value={name.lastName}
        onChange={e => setName({...name, lastName : e.target.value })} /> {/** ...name(i.e spread operator) First make the exact replica of name object, & then only update the lastName property */}

        <h2>Your first name - {name.firstName}</h2>
        <h2>Your last name - {name.lastName}</h2>
        <h3>{JSON.stringify(name)}</h3>
      </form>
    </div>
  )
}

export default HookCounterThree
