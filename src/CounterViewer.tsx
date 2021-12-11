import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const CounterViewer = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <br />
      <h2>Count : {counter}</h2>
      <br />
   </div>
  );
};

export default CounterViewer;
