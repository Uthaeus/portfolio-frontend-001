import { useState } from "react";

import CalButton from "./cal-button";

function Calculator() {
    const [display, setDisplay] = useState('0');
    const [currentInput, setCurrentInput] = useState('');
    const [allInput, setAllInput] = useState([]); 

    let buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

    function buttonClickHandler(value, type) {
        switch (type) {
            case 'clear':
                setDisplay('0');
                setCurrentInput('');
                setAllInput([]);
                break;
            case 'delete':
                if (currentInput.length === 1) {
                    setCurrentInput('');
                    setDisplay('0');
                } else {
                    setCurrentInput(currentInput.slice(0, -1));
                    setDisplay(currentInput.slice(0, -1));
                }
                break;
            case 'percent':
                if (currentInput.length === 0) {
                    return;
                } else {
                    setCurrentInput(currentInput / 100);
                    setDisplay(currentInput / 100);
                }
                break;
            case 'operator':
                if (currentInput.length === 0) {
                    return;
                } else {
                    setCurrentInput('');
                    setAllInput([...allInput, currentInput, value]);
                }
                break;
            case 'equal':
                if (currentInput.length === 0) {
                    return;
                } else {
                    let curArr = [...allInput, currentInput];
                    setAllInput(curArr);
                    let str = curArr.join(' ');
                    let result = eval(str);
                    setDisplay(result);
                    setCurrentInput(result);
                    setAllInput([]);
                }
                break;
            case 'decimal':
                if (currentInput.includes('.')) {
                    return;
                } else {
                    setCurrentInput(currentInput + value);
                    setDisplay(currentInput + value);
                }
                break;
            default:
                if (currentInput.length === 1 && currentInput[0] === '0') {
                    setCurrentInput(value);
                    setDisplay(value);
                } else {
                    setCurrentInput(currentInput + value);
                    setDisplay(currentInput + value);
                }
                break;
        }
    }

    return (
        <div className="calculator-container">
            <h1 className="calculator-title">Calculator</h1>

            <div className="calculator-wrapper">
                <div className="calculator-display-wrapper">
                    <p className="calculator-display">{display}</p>
                </div>

                <div className="calculator-buttons-wrapper">
                    {buttons.map(button => {
                        return <CalButton key={button} value={button} onClick={buttonClickHandler} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Calculator;