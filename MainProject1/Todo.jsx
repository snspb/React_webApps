import React, { useState } from "react";

const Todo = () => {
  const [input, setinput] = useState("");
  const [item, setitem] = useState([]);
  const additem = () => {
    if (!input) {
      alert("Please Enter Some data");
    } else {
      setitem([...item, input]);
      setinput("");
    }
  };
  const del = (i) => {
    const updateitem = item.filter((e, ind) => {
      return ind != i;
    });
    setitem(updateitem);
  };
  return (
    <>
      <h1 className="text-success m-5 display-4">SN Todo List App </h1>
      <div>
        <h5 className="p-3">----Make your task list---- </h5>
        <div className="m-3" >
        <input
          className=" container bg-dark text-light p-3 border-success"
          type="text"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          placeholder="Enter your task here...."
        />
        <br />
        <button
          className="btn-success my-3 p-2 px-5 rounded "
          onClick={additem}
        >
          Submit
        </button>
        </div>
      </div>
      <hr className="bg-success" />

      <div className="m-3">
        {item.map((e, i) => {
          return (
            <div
              className="container border border-success p-2 my-3 rounded"
              key={i}
              onClick={() => del(i)}
            >
              <h5>{e}</h5>
            </div>
          );
        })}
      </div>
      <hr className="bg-success" />

    </>
  );
};

export default Todo;
