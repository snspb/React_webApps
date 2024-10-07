import React, { useState } from "react";

export default function Txtform(props) {
  const [text, settext] = useState("");
  let ntext;

  const upclick = () => {
    ntext = text.toUpperCase();
    settext(ntext);
  };
  const lowclick = () => {
    ntext = text.toLowerCase();
    settext(ntext);
  };
  const reverse = () => {
    ntext = text.split("").reverse().join("");
    settext(ntext);
  };
  const cleartxt = () => {
    ntext = "";
    settext(ntext);
  };

  const Onchg = (event) => {
    settext(event.target.value);
  };
  return (
    <>
      <div className="container">
        {/* <h1 className="text-warning">{props.title}</h1> */}
        <h3 className=" display-4 text-warning m-3">TEXT MODIFY APP</h3>
        <div className="container mb-3">
          <textarea
            className="form-control bg-dark text-white border-warning"
            value={text}
            onChange={Onchg}
            id="myBox"
            style={{ fontSize: "22px" }}
            rows="5"
          ></textarea>
          <button className="btn btn-outline-warning m-2" onClick={upclick}>
            Convert To UpperCase
          </button>
          <button className="btn btn-outline-warning m-3" onClick={lowclick}>
            Convert To LowerCase
          </button>
          <button className="btn btn-outline-warning m-3" onClick={reverse}>
            Reverse Text
          </button>
          <button className="btn btn-outline-danger m-3" onClick={cleartxt}>
            Clear Textarea
          </button>
        </div>
      </div>

      <div className="container  my-3 m-auto">
        <h3 className="text-warning">Your Text Summary</h3>
        <p>
          {" "}
          There are {text.split(" ").length - 1} words and {text.length}{" "}
          characters.
        </p>
        <p>
          You can read this words in {0.008 * text.split(" ").length * 100}{" "}
          seconds
        </p>
      </div>
      {/* <div className="container-fluid">
        <h2 className="text-warning">Preview--</h2>
        <p className="overflow-hidden">{text}</p>
      </div> */}
    </>
  );
}
