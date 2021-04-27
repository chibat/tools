import React, { useState } from "react";
import Header from "../components/Header.tsx";

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

  const readonlyStyle = { width: "100%", backgroundColor: "white" };

  return (
    <div>
      <Header />
      <h1>Base64</h1>
      <h2>encode: btoa</h2>
      <input
        type="text"
        value={valueBtoa}
        onChange={onChangeBtoa}
        onKeyPress={onKeyPressBtoa}
        style={{ width: "100%" }}
      />{" "}
      <input readOnly value={resultBtoa} style={readonlyStyle} />
      <span style={{ color: "red" }}>{errorBtoa}</span>
      <h2>decode: atob</h2>
      <input
        type="text"
        value={valueAtob}
        onChange={onChangeAtob}
        onKeyPress={onKeyPressAtob}
        style={{ width: "100%" }}
      />{" "}
      <input readOnly value={resultAtob} style={readonlyStyle} />
      <span style={{ color: "red" }}>{errorAtob}</span>
    </div>
  );
}
