import React, { useState } from "react";

import Calculator from "./components/Keyboard";
import Result from "./components/Result";
import calculate from "./services/calculate";

const initialState = ''
const initialResultState = '0'

function App() {
  const [result, setResult] = useState(initialResultState)
  const [value , setValue] = useState(initialState)

  const handleNumber = ({ target }) => {
    setValue(value + target.value)
  }

  const handleChange = ({ target }) => {
    setValue(target.value)
  }

  const clear = () => {
    setValue(initialState)
    setResult(initialResultState)
  }

  const getResult = () => {
    const total = calculate(value)
    setResult(total)
  }

  return (
    <div className="container">
      <Result defaultValue={0}>
        {result}
      </Result>
      <input
        className="inputValue"
        value={value}
        onChange={handleChange}
      />
      <Calculator
        clear={clear}
        getResult={getResult}
        handleNumber={handleNumber}
      />
    </div>
  )
}



export default App;
