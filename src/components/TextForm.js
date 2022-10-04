import React, { useState } from "react";
//import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [Text, setText] = useState("");

  const handleUpClick = () =>{
    let newText = Text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to UpperCase!","success");
  }

  const handleLoClick = () =>{
    let newText = Text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase!","success");
  }

  const handleClearClick = () =>{
    let newText = "";
    setText(newText)
    props.showAlert("Text cleared!","success");
  }

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!","success");
  }

    //setText("My name is Abhishek");
  return (
    <>
    <div className="container" style={{color: props.mode==="dark"?'white':'black'}}>
      <div className="mb-3">
        <h1 >{props.heading}</h1>
        <textarea className="form-control my-3" value={Text} id="myBox" rows="8" onChange={handleOnChange}style= {{backgroundColor:props.mode==='dark'?'#363a3d':'white',color:props.mode==='dark'?'white':'black'}} placeholder={"Enter text here"}></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==="dark"?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{Text === "" ? 0 : Text.split(" ").length} words and {Text.replace(/ /g ,"").length} characters</p>
        <p>{Text === "" ? 0 : 0.008*Text.split(" ").length} Minutes read</p>
        <h2>Preview</h2> 
        <p>{Text}</p>
    </div>
    </>
  ); 
}
 