import React, { useState } from "react";

const Counter = () => {
  let [counter, setcounter] = useState(0);
  const incre = () => {
    setcounter(counter + 1);
  };
  const decre = () => {
    if (counter == 0) {
      return 0;
    } else {
      setcounter(counter - 1);
    }
  };
  const reset = () => {
    setcounter(0);
  };
  return (
    <>
      <h1 className="display-4 m-5 text-warning">Counter App </h1>
      <h1 className="display-3 m-5">{counter}</h1>
      <button className="btn btn-outline-warning m-2" onClick={incre}>
        INCREMENT
      </button>
      <button className="btn btn-outline-warning m-2 " onClick={decre}>
        DECREMENT
      </button>

      <button className="btn btn-outline-danger m-2 " onClick={reset}>
        RESET
      </button>

      <br />
      {/* <hr className="bg-warning" /> */}

    </>
  );
};

export default Counter;
