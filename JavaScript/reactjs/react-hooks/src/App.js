import React  from 'react';
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
// import Counter from './components/use-reducer/Counter';
// import CounterTwo from './components/use-reducer/CounterTwo';
// import CounterThree from './components/use-reducer/CounterThree';
// import DataFetchingOne from './components/use-reducer/DataFetchingOne';
// import DataFetchingTwo from './components/use-reducer/DataFetchingTwo';

/************* */

/*** useCallback */
// import ParentComponent from './components/use-callback/ParentComponent'
/** */


/** useMemo */
// import Counter from './components/use-memo/Counter'


/** useRef */
// import FocusInput from './components/use-ref/FocusInput'
// import ClassTimer from './components/use-ref/ClassTimer'
// import HookTimer from './components/use-ref/HookTimer'

/** custom Hooks */
import DocTitleOne from './components/custom-hooks/DocTitleOne'
import DocTitleTwo from './components/custom-hooks/DocTitleTwo';
import CounterOne from './components/custom-hooks/CounterOne'
import CounterTwo from './components/custom-hooks/CounterTwo'
import UserForm from './components/custom-hooks/UserForm'

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
            {/**<DataFetching /> */}

            {/**------------------- */}

            {/** context */}
            {/**<userContext.Provider value={'foo'}>
                <channelContext.Provider value={'bar'} >
                    <ComponentA />
                </channelContext.Provider>
            </userContext.Provider> */}
            
            {/**------*/}
            
            {/**---- useReducer ---*/}

            {/**<Counter /> */}
            {/**<CounterTwo /> */}
            {/**<CounterThree />*/}
            {/** <DataFetchingOne />*/}
            {/**<DataFetchingTwo /> */}
            
            {/**---------- */}

            {/**---- useCallback ----*/}
            {/**<ParentComponent />*/}
            {/** ------------- */}

            {/** -- useMemo -- */}
            {/**<Counter />*/}

            {/**---- useRef ----- */}
            {/**<FocusInput />*/}
            {/**<ClassTimer />*/}
            {/**<HookTimer />*/}

            {/** custom hooks */}
            {/**<DocTitleOne />
            <DocTitleTwo /> */}
            
            {/**<CounterOne />
            <CounterTwo /> */}

            <UserForm />

        </div>
    );
}


// ----- useReducer with useContex -----------

/**
import {useReducer} from 'react';
import CounterA from './components/use-reducer/useReducer-with-context/CounterA';
import CounterB from './components/use-reducer/useReducer-with-context/CounterB';
import CounterC from './components/use-reducer/useReducer-with-context/CounterC';

const initialState = 0
const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

export const CountContext = React.createContext()
function App(){
    const [count, dispatch] = useReducer(reducer, initialState )
    return(
        <CountContext.Provider value={{countState : count, countDispatch: dispatch}}>
            <div className="App">
                Count - {count}
                <CounterA />
                <CounterB />
                <CounterC />
            </div>
        </CountContext.Provider>
               
    );
}
 */



export default App;
