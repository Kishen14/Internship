import React, { useState,useEffect } from "react";
import Output from "./Output";
import Buttons from "./Buttons";
import { evaluate, round } from "mathjs";
import "./Styles.css";

function Calculator() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");

  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("Number of clicks: " + counter);
  });

  function increment() {
    setCounter(counter+1);
  }







  const inputHandler = (event) => {
    if (answer === "Syntax Error") return;
    let val = event.target.innerText;

    if (val === "x2") val = "^ 2";
    else if (val === "x3") val = "^ 3";
    else if (val === "3√") val = "^(1÷3)";
    else if (val === "log") val = "log(";

    let str = input + val;
    if (str.length > 14) return;

    if (answer !== "") {
      setInput(answer + val);
      setAnswer("");
    } else setInput(str);
  };

  const clearInput = () => {
    setInput("");
    setAnswer("");
  };

  const checkBracketBalanced = (expr) => {
    let stack = [];
    for (let i = 0; i < expr.length; i++) {
      let x = expr[i];
      if (x === "(") {
        stack.push(x);
        continue;
      }

      if (x === ")") {
        if (stack.length === 0) return false;
        else stack.pop();
      }
    }
    return stack.length === 0;
  };

  const calculateAns = () => {
    if (input === "") return;
    let result = 0;
    let finalExpression = input;
    finalExpression = finalExpression.replaceAll("x", "*");
    finalExpression = finalExpression.replaceAll("÷", "/");

    let noSqrt = input.match(/√[+-]*[0-9]+/gi);

    if (noSqrt !== null) {
      let evalSqrt = input;
      for (let i = 0; i < noSqrt.length; i++) {
        evalSqrt = evalSqrt.replace(
          noSqrt[i],
          `sqrt(${noSqrt[i].substring(1)})`
        );
      }
      finalExpression = evalSqrt;
    }

    try {
      if (!checkBracketBalanced(finalExpression)) {
        const errorMessage = { message: "Syntax Error" };
        throw errorMessage;
      }
      if (input.includes("^ 2") || input.includes("^2")) {
        result = round(Math.pow(parseFloat(input), 2), 4);
      } else result = round(evaluate(finalExpression), 4);
    } catch (error) {
      result =
        error.message === "Syntax Error"
          ? "Syntax Error"
          : "Syntax Error";
    }
    isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
    
  };

  const backspace = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
  };

  const changePlusMinus = () => {
    if (answer === "Invalid Input!!") return;
    else if (answer !== "") {
      let ans = answer.toString();
      if (ans.charAt(0) === "-") {
        let plus = "+";
        setInput(plus.concat(ans.slice(1, ans.length)));
      } else if (ans.charAt(0) === "+") {
        let minus = "-";
        setInput(minus.concat(ans.slice(1, ans.length)));
      } else {
        let minus = "-";
        setInput(minus.concat(ans));
      }
      setAnswer("");
    } else {
      if (input.charAt(0) === "-") {
        let plus = "+";
        setInput((prev) => plus.concat(prev.slice(1, prev.length)));
      } else if (input.charAt(0) === "+") {
        let minus = "-";
        setInput((prev) => minus.concat(prev.slice(1, prev.length)));
      } else {
        let minus = "-";
        setInput((prev) => minus.concat(prev));
      }
    }
  };

  return (
    <>
    <p>{counter}</p>
  <button onClick={increment}>Increment</button>
      <h3 className="text-center"> Calculator {count}</h3>
      <div
        className="container  h-25 my-5 bg-dark"
        style={{ fontSize: "2.5rem", width: "23%" }}
      >
        <table className="table ">
          <tr>
            <td colSpan="5">
              <Output input={input} setInput={setInput} answer={answer} />
            </td>
          </tr>

          <Buttons
            inputHandler={inputHandler}
            clearInput={clearInput}
            backspace={backspace}
            changePlusMinus={changePlusMinus}
            calculateAns={calculateAns}
          />
        </table>
      </div>
          </>
  );
}

export default Calculator;