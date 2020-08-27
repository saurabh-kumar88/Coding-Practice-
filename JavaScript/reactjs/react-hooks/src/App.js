import React from 'react';
import './App.css';



/**useState Hook */
// import ClassCounter from './components/use-state-hook/ClassCounter';
// import HookCounter from './components/use-state-hook/HookCounter';
// import HookCounterTwo from './components/use-state-hook/HookCounterTwo';
// import HookCounterThree from './components/use-state-hook/HookCounterThree';
// import HookCounterFour from './components/use-state-hook/HookCounterFour';
/** */

/**useEffect Hook */
// import ClassCounterHook from './components/use-effect-hook/ClassCounterHook';
// import HookCounterOne from './components/use-effect-hook/HookCounterOne';
import ClassMouse from './components/use-effect-hook/ClassMouse';
import HookMouse from './components/use-effect-hook/HookMouse';
import MouseContainer from './components/use-effect-hook/MouseContainer';
/** */

function App() {
    return (
        <div className="App">
            
            {/**useState*/}
            {/**<ClassCounter />*/}
            {/**<HookCounter />*/}
            {/**<HookCounterTwo /> */}
            {/**<HookCounterThree />*/}
            {/**<HookCounterFour />*/}
            {/** */}

            {/**useEffect */}
            
            {/**<ClassCounterHook/>*/}
            {/**<HookCounterOne />*/}
            {/**<ClassMouse />*/}
            {/**<HookMouse />*/}
            <MouseContainer/>
            
            {/** */}



        </div>
    );
}


export default App;
