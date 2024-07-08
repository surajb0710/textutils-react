import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    console.log("Button clicked", text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Button clicked", text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("Text Changed");
    setText(event.target.value);
  };

  const resetForm = () => {
    setText("Enter text here");
  };

  const clearForm = () => {
    setText("");
  };

  const wordCount = () => {
    let count = 0;
    text.split(" ").forEach((element) => {
      if (element !== "") {
        count = count + 1;
      }
    });
    return count;
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "Black" : "White",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            onClick={clearForm}
            id="myBox"
            rows="3"
            style={{
              backgroundColor: props.mode === "light" ? "White" : "Black",
              color: props.mode === "light" ? "Black" : "White",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={resetForm}>
          Reset
        </button>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "Black" : "White",
        }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {wordCount()} words and {text.trim().length} characters
        </p>
        <p>{text.split("").length * 0.008} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
