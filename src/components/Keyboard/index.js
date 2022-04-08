import React from "react";

import Button from "../Button";

export default function Calculator({ handleNumber, clear, getResult }) {
    return (
        <>
          <div>
            <Button onClick={handleNumber} value='('>(</Button>
            <Button onClick={handleNumber} value=')'>)</Button>
            <Button onClick={handleNumber} value='%'>%</Button>
            <Button onClick={clear}>AC</Button>
          </div>
          <div>
            <Button onClick={handleNumber} className="strong--gray" value={7}>7</Button>
            <Button onClick={handleNumber} className="strong--gray" value={8}>8</Button>
            <Button onClick={handleNumber} className="strong--gray" value={9}>9</Button>
            <Button onClick={handleNumber} className="orange" value="/">/</Button>
          </div>
          <div>
            <Button onClick={handleNumber} className="strong--gray" value={4}>4</Button>
            <Button onClick={handleNumber} className="strong--gray" value={5}>5</Button>
            <Button onClick={handleNumber} className="strong--gray" value={6}>6</Button>
            <Button onClick={handleNumber} className="orange" value='*'>*</Button>
          </div>
          <div>
            <Button onClick={handleNumber} className="strong--gray" value={1}>1</Button>
            <Button onClick={handleNumber} className="strong--gray" value={2}>2</Button>
            <Button onClick={handleNumber} className="strong--gray" value={3}>3</Button>
            <Button onClick={handleNumber} className="orange" value="-">-</Button>
          </div>
          <div>
            <Button onClick={handleNumber} className="strong--gray" value={0}>0</Button>
            <Button onClick={handleNumber} className="strong--gray" value='.'>.</Button>
            <Button onClick={getResult} value='='>=</Button>
            <Button onClick={handleNumber} className="orange" value='+'>+</Button>
          </div>
        </>
    )
}