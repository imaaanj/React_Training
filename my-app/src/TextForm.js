import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log(text);
    const newText = text.toUpperCase();
    setText(newText);
  };

  const handleLwClick = () => {
    console.log(text);
    const newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearText = () => {
    const newText = '';
    setText(newText);
  };

  const copyToClip = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  const camelCase = () => {
    const words = text.split(" ");
    const camelCaseText = words
      .map((word, index) => {
        if (index === 0) {
          return word.toLowerCase();
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join(" ");

    setText(camelCaseText);
  };

  const handleOnChange = (event) => {
    console.log("on Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <h1>{props.header}</h1>
          <label htmlFor="form" className="form-label">
            {props.heading}
          </label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="form"
            rows="7"
          ></textarea>
        </div>
      </div>
      <button
        className="btn btn-primary btn-sm col-xs-2 btn-primary-spacing m-3"
        onClick={handleUpClick}
      >
        UpperCase
      </button>
      <button
        className="btn btn-primary btn-sm col-xs-2 btn-primary-spacing m-3"
        onClick={handleLwClick}
      >
        LowerCase
      </button>

      <button
        className="btn btn-primary btn-sm col-xs-2 btn-primary-spacing m-3"
        onClick={camelCase}
      >
        Camel Case
      </button>

      <button
        className="btn btn-primary btn-sm col-xs-2 btn-primary-spacing m-3"
        onClick={copyToClip}
      >
        Copy Text
      </button>

      <button
        type="button"
        class="btn btn-danger btn-sm col-xs-2 btn-primary-spacing m-3 " onClick={handleClearText}
      >
        Clear
      </button>

      <div className="container" my-5="true">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} Words & {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").length} Minutes to read OR{" "}
          {0.008 * 60 * text.split(" ").length} Seconds to read
        </p>
        <h2>Preview: </h2>
        <p>{text}</p>
      </div>
    </>
  );
}
