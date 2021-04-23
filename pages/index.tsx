import React, { useState } from "react";

const errorMessage = "Contains characters that cannot be converted.";

export default function Home() {

  const [valueBtoa, setValueBtoa] = useState("");
  const [resultBtoa, setResultBtoa] = useState("");
  const [errorBtoa, setErrorBtoa] = useState("");

  function onChangeBtoa(event: React.ChangeEvent<any>) {
    setValueBtoa(event.target.value);
  }

  function onKeyPressBtoa(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      setResultBtoa("");
      setErrorBtoa("");
      e.preventDefault();
      try {
        setResultBtoa(btoa(valueBtoa));
      } catch {
        setErrorBtoa(errorMessage);
      }
    }
  }

  const [valueAtob, setValueAtob] = useState("");
  const [resultAtob, setResultAtob] = useState("");
  const [errorAtob, setErrorAtob] = useState("");

  function onChangeAtob(event: React.ChangeEvent<any>) { // TODO any
    setValueAtob(event.target.value);
  }

  function onKeyPressAtob(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      setResultAtob("");
      setErrorAtob("");
      e.preventDefault();
      try {
        setResultAtob(atob(valueAtob));
      } catch (e) {
        setErrorAtob(errorMessage);
      }
    }
  }

  decodeURI("");

  const [valueUrlEncode, setValueUrlEncode] = useState("");
  const [resultUrlEncode, setResultUrlEncode] = useState("");

  function onChangeUrlEncode(event: React.ChangeEvent<any>) {
    setValueUrlEncode(event.target.value);
  }

  function onKeyPressUrlEncode(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      setResultUrlEncode("");
      e.preventDefault();
      setResultUrlEncode(encodeURI(valueUrlEncode));
    }
  }

  const [valueUrlDecode, setValueUrlDecode] = useState("");
  const [resultUrlDecode, setResultUrlDecode] = useState("");

  function onChangeUrlDecode(event: React.ChangeEvent<any>) {
    setValueUrlDecode(event.target.value);
  }

  function onKeyPressUrlDecode(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      setResultUrlDecode("");
      e.preventDefault();
      setResultUrlDecode(decodeURI(valueUrlDecode));
    }
  }

  return (
    <div>
      <head>
        <title>Tool</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
        />
        <link rel="shortcut icon" href="https://pages.github.com/favicon.ico" />
      </head>
      <header>
        <h1>Tool</h1>
        <nav>
          <a href="https://chibat.github.io/tool/">Home</a> /
          <a href="https://github.com/chibat/tool" target="_blank">GitHub</a>
        </nav>
      </header>
      <h1>Base64</h1>
      <h2>encode: btoa</h2>
      <input
        type="text"
        value={valueBtoa}
        onChange={onChangeBtoa}
        onKeyPress={onKeyPressBtoa}
      />{" "}
      {resultBtoa}
      <span style={{ color: "red" }}>{errorBtoa}</span>
      <h2>decode: atob</h2>
      <input
        type="text"
        value={valueAtob}
        onChange={onChangeAtob}
        onKeyPress={onKeyPressAtob}
      />{" "}
      {resultAtob}
      <span style={{ color: "red" }}>{errorAtob}</span>
      <h1>URL</h1>
      <h2>encode: encodeURI</h2>
      <input
        type="text"
        value={valueUrlEncode}
        onChange={onChangeUrlEncode}
        onKeyPress={onKeyPressUrlEncode}
      />{" "}
      {resultUrlEncode}
      <h2>decode: dencodeURI</h2>
      <input
        type="text"
        value={valueUrlDecode}
        onChange={onChangeUrlDecode}
        onKeyPress={onKeyPressUrlDecode}
      />{" "}
      {resultUrlDecode}
    </div>
  );
}
