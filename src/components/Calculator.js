import React, { useState } from "react";
import "./Calculator.css"; 

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <input
        className="input-field"
        type="text"
        value={input}
        readOnly
      />

      <div className="button-row">
        <button className="gray-button" onClick={() => handleButtonPress("7")}>7</button>
        <button className="gray-button" onClick={() => handleButtonPress("8")}>8</button>
        <button className="gray-button" onClick={() => handleButtonPress("9")}>9</button>
        <button className="gray-button" onClick={() => handleButtonPress("/")}>/</button>
      </div>

      <div className="button-row">
        <button className="gray-button" onClick={() => handleButtonPress("4")}>4</button>
        <button className="gray-button" onClick={() => handleButtonPress("5")}>5</button>
        <button className="gray-button" onClick={() => handleButtonPress("6")}>6</button>
        <button className="gray-button" onClick={() => handleButtonPress("*")}>*</button>
      </div>

      <div className="button-row">
        <button className="gray-button" onClick={() => handleButtonPress("1")}>1</button>
        <button className="gray-button" onClick={() => handleButtonPress("2")}>2</button>
        <button className="gray-button" onClick={() => handleButtonPress("3")}>3</button>
        <button className="gray-button" onClick={() => handleButtonPress("-")}>-</button>
      </div>

      <div className="button-row">
        <button className="gray-button" onClick={() => handleButtonPress("0")}>0</button>
        <button className="gray-button" onClick={() => handleButtonPress(".")}>.</button>
        <button className="gray-button" onClick={handleEqual}>=</button>
        <button className="gray-button" onClick={() => handleButtonPress("+")}>+</button>
      </div>

      <div className="button-row">
        <button className="gray-button" onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Calculator;
