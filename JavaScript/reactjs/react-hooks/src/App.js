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
// import ClassMouse from './components/use-effect-hook/ClassMouse';
// import HookMouse from './components/use-effect-hook/HookMouse';
// import MouseContainer from './components/use-effect-hook/MouseContainer';
// import ClassIntervalCounter from './components/use-effect-hook/ClassIntervalCounter';
// import HookIntervalCounter from './components/use-effect-hook/HookIntervalCounter';
// import DataFatching from './components/use-effect-hook/DataFatching';

/** */

/** context */
// import ComponentA from './components/context/ComponentA';
// export const userContext = React.createContext()
// export const channelContext = React.createContext()
/** */

/** useReducer */
import Counter from './components/use-reducer/Counter';
import CounterTwo from './components/use-reducer/CounterTwo';
import CounterThree from './components/use-reducer/CounterThree';
/************* */


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
            {/**<MouseContainer/>*/}
            {/**<ClassIntervalCounter /> */}
            {/**<HookIntervalCounter /> */} 
            {/**<DataFatching /> */}

            {/**------------------- */}

            {/** context */}
            {/**<userContext.Provider value={'foo'}>
                <channelContext.Provider value={'bar'} >
                    <ComponentA />
                </channelContext.Provider>
            </userContext.Provider> */}
            
            {/**------*/}
            
            {/** useReduce */}
            {/**<Counter /> */}
            {/**<CounterTwo /> */}
            <CounterThree /> 
            {/***/}
            
            {/**---------- */}



        </div>
    );
}


export default App;
