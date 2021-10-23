import React from "react";
import { createNumbers } from "../utils/helperFunctions";
import "../styles/calculator.css";
import { useState } from "react";

function Calculator() {
  const [result, setResult] = useState("");
  const [calc, setCalc] = useState("");

  const ops = ["+", "-", "*", "/", ".", "AC", "Del"];

  const handleClick = (value) => {
    if (value === "AC") {
      setCalc("");

      setResult("");
      return;
    }

    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    if (value === "=") {
      // check of the last character is not an operator
      if (ops.includes(calc.slice(-1))) {
        return;
      }
      setResult(eval(calc));
      setCalc("");

      return;
    }

    setCalc(calc + value);

    if (value === "Del") {
      setCalc(calc.slice(0, -1));
      return;
    }
    if (value === "." && calc.includes(".")) {
      return;
    }

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  return (
    <div>
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""} {calc || "0"}
        </div>
        <div className="operators">
          <button className="calc-btn" onClick={(e) => handleClick("AC")}>
            <span>AC</span>
          </button>
          <button className="calc-btn" onClick={(e) => handleClick("+")}>
            <span>+</span>
          </button>
          <button className="calc-btn" onClick={(e) => handleClick("-")}>
            <span>-</span>
          </button>
          <button className="calc-btn" onClick={(e) => handleClick("/")}>
            <span>/</span>
          </button>
          <button className="calc-btn" onClick={(e) => handleClick("*")}>
            <span>X</span>
          </button>

          <button className="calc-btn" onClick={(e) => handleClick("Del")}>
            <span>Delete</span>
          </button>
        </div>

        <div className="numbers">
          {createNumbers({ className: "calc-btn", onClickFunc: handleClick })}
          <button className="calc-btn" onClick={(e) => handleClick("0")}>
            0
          </button>
          <button className="calc-btn" onClick={(e) => handleClick(".")}>
            .
          </button>
          <button className="calc-btn" onClick={(e) => handleClick("=")}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
