import React,{useState, useReducer} from 'react'


const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

export default function Arraytesting() {
  function reducer(state, action){
    switch(action.type)
    {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 }

      case ACTIONS.DECREMENT:
        return { count: state.count - 1 }
      
      default:
        alert("Error"); 
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 }) 

  const increment = () => {
    dispatch({type: ACTIONS.INCREMENT});
  }
  const decrement = () => {
   dispatch({type: ACTIONS.DECREMENT});
  }

  return (
    <>
     <button onClick={decrement}>-</button>
     {state.count} 
     <button onClick={increment}>+</button> 
    </>
  )
}
