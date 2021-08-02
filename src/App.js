import "./styles.css";
import React,{useState} from 'react';
import { Store } from "./store/store.js";
import { addCount,removeCount,reset } from "./store/action.js";
export default function App() {
  const [v,setv] = useState(0);
  return (
    <div className="App">
      <h1>Count:{Store.getState().count}</h1>

    <button onClick={()=>{
      Store.dispatch(addCount(1));
      setv((prev)=>prev+1);
    }}>Increment</button>


    <button onClick={()=>{
      if(v>0)
      {
         Store.dispatch(removeCount(1));
         setv((prev)=>prev-1);
      }
    }}>Decrement</button>

    <button onClick={()=>{
      Store.dispatch(reset());
      setv((prev)=>0);
    }}>Reset</button>

    </div>

    
  );
}
