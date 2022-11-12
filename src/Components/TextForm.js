import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UPPERCASE", "warning");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "warning");
  };
  const firstCharCap = () => {
    let firstCap = text.charAt(0).toUpperCase();
    let newText = firstCap + text.slice(1).toLowerCase();
    setText(newText);
    props.showAlert("Converted to Sentence case", "warning");
  };
  const capitalizedCase = () => {
    //split the above string into an array of strings
    //whenever a blank space is encountered
    let getText = text.split(" ");
    for (let i = 0; i < getText.length; i++) {
      getText[i] =
        getText[i].charAt(0).toUpperCase() + getText[i].slice(1).toLowerCase();
    }
    //Join all the elements of the array back into a string
    //using a blankspace as a separator
    let newText = getText.join(" ");
    setText(newText);
    props.showAlert("Converted to Capitalized Case", "warning");
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "warning");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div>
          <h1>{props.heading}</h1>
          <div className="input-group">
            <span className="input-group-text">Textarea</span>
            <textarea
              className="form-control"
              style={{
                backgroundColor: props.mode === "light" ? "white" : "#1B2631",
                color: props.mode === "light" ? "black" : "white",
              }}
              aria-label="With textarea"
              value={text}
              onChange={handleOnChange}
              id="myBox"
            ></textarea>
          </div>
          <button disabled={text.length === 0} className="btn btn-warning my-3 mx-2" onClick={handleUpClick}>
            Convert to UPPER CASE
          </button>
          <button disabled={text.length === 0} className="btn btn-warning my-3 mx-2" onClick={handleLoClick}>
            Convert to lower case
          </button>
          <button disabled={text.length === 0} className="btn btn-warning my-3 mx-2" onClick={firstCharCap}>
            Convert to Sentence case
          </button>
          <button disabled={text.length === 0}
            className="btn btn-warning my-3 mx-2"
            onClick={capitalizedCase}
          >
            Convert to Capitalized Case
          </button>
          <button disabled={text.length === 0} className="btn btn-warning my-3 mx-2" onClick={clearText}>
            Clear text
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h3>Your text summary</h3>
        <p>
          {text.split(/\s+/).filter((word) => word !== "").length} words and{" "}
          {text.length} characters
        </p>
        
        <h3>Preview of text</h3>
        <p>
          {text.length === 0
            ? "Nothing to preview"
            : text}
        </p>
        <br />
        <hr />
        <br />
      </div>
    </>
  );
}
