import React, { useState } from 'react';

function HookCounter() {
  // syntax : const [initial state, a method to update the state]
  //[count, setState] is a array destructuring
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 0.5)}>Hook Count {count}</button>
        </div>
    );
}

export default HookCounter;
