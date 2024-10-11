import React,{useState} from 'react';

function CounterProgram() {
    const [count,setCount]=useState(0);

    const increment = () => {
        setCount(count+1);

    };
    const decrement=() => {
        setCount(count-1);
    };
    const reset = () => {
        setCount(0);
    };

return(
    <div className="counter-container">
        <p className="count-display">{count}</p>
        <button className="button" onClick={increment}>increment</button>
        <button className="button" onClick={decrement}>decrement</button>
        <button className="button" onClick={reset}>reset</button>
    </div>
);
}
export default CounterProgram; 