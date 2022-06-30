import "./Counter.css"
import { useState } from "react"

export function Counter(props) {
    const counterState = useState(props.initalValue); 
    const counter = counterState[0];
    const setCounter = counterState[1];

    //const [counter, setCounter] = useState (props.initalValue);

    const handleIncrease = () => {
       console.log('click', counter);
       //setCounter(counter + 1 );
       setCounter((state) => ++state)};

    const handleDecrease = () => {
        setCounter(counter - 1 );
    }

    return (
    <>
    <button className="minus" onClick={handleDecrease}>-</button>
    <span className="counter">{counter}</span>
    <button className="plus" onClick={handleIncrease}>+</button>
    </> 
    )   
 }