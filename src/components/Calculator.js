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
        <div className="Calculator">
            <input
                className="input-field"
                type="text"
                value={input}
                readOnly
            />
            <div id="calci" >
                <div id="btn-div" className="button-row">
                    <button id="btn-7" className="gray-button" onClick={() => handleButtonPress("7")}>7</button>
                    <button id="btn-8" className="gray-button" onClick={() => handleButtonPress("8")}>8</button>
                    <button id="btn-9" className="gray-button" onClick={() => handleButtonPress("9")}>9</button>
                    <button className="gray-button" onClick={() => handleButtonPress("/")}>/</button>
                </div>

                <div id="btn-div" className="button-row">
                    <button id="btn-4" className="gray-button" onClick={() => handleButtonPress("4")}>4</button>
                    <button id="btn-5" className="gray-button" onClick={() => handleButtonPress("5")}>5</button>
                    <button id="btn-6" className="gray-button" onClick={() => handleButtonPress("6")}>6</button>
                    <button className="gray-button" onClick={() => handleButtonPress("*")}>*</button>
                </div>

                <div id="btn-div" className="button-row">
                    <button id="btn-1" className="gray-button" onClick={() => handleButtonPress("1")}>1</button>
                    <button id="btn-2" className="gray-button" onClick={() => handleButtonPress("2")}>2</button>
                    <button id="btn-3" className="gray-button" onClick={() => handleButtonPress("3")}>3</button>
                    <button id="btn--" className="gray-button" onClick={() => handleButtonPress("-")}>-</button>
                </div>

                <div id="btn-div" className="button-row">
                    <button className="gray-button" onClick={() => handleButtonPress("0")}>0</button>
                    <button className="gray-button" onClick={() => handleButtonPress(".")}>.</button>
                    <button id="equal" className="gray-button" onClick={handleEqual}>=</button>
                    <button id="plus" className="gray-button" onClick={() => handleButtonPress("+")}>+</button>
                </div>

                <div id="btn-div" className="button-row">
                    <button className="gray-button" onClick={handleClear}>C</button>
                </div>
            </div>

        </div>
    );
};

export default Calculator;
