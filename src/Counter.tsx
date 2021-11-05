import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React,{useState} from "react";

const Counter = () =>{
    const [counter,setCounter] = useState(0)
    const [amount,setAmount] = useState(0)
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        console.log(amount)
        setAmount(parseInt(e.target.value) || 0)
    }
    const handleIncrement = ()=>{
        setCounter(counter+1)
    }
    const handleDecrement = () =>{
        counter >0 ? setCounter(counter-1) : setCounter(0)
    }
    const handleIncrementByAmount = () =>{
        setCounter(counter+amount)
    }
    const handleDecrementByAmount = () =>{
        counter >0 ? setCounter(counter-amount) : setCounter(0)
    }
    return (
        <div>
        <h1>Counter Works</h1><br/>
        <h2>Count : {counter}</h2><br/>
        <TextField id="standard-basic" label="Amount" variant="standard"  value={amount} onChange={handleInputChange} color = "secondary"/><br/><br/>
        <Button variant="contained" onClick={handleIncrement}>Increment</Button><br/><br/>
        <Button variant="contained" onClick={handleDecrement}>Decrement</Button><br/><br/>
        <Button variant="contained" onClick={handleIncrementByAmount}>Increment By Amount</Button><br/><br/>
        <Button variant="contained" onClick={handleDecrementByAmount}>Decrement By Amount</Button><br/>

        
        </div>
    )
}

export default Counter