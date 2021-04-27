import React, { useState } from "react";
import Header from "../components/Header.tsx";

export default function Home() {
  const [valueUrlEncode, setValueUrlEncode] = useState("");
  const [resultUrlEncode, setResultUrlEncode] = useState("");

  function onChangeUrlEncode(event: React.ChangeEvent<any>) {
    setValueUrlEncode(event.target.value);
  }

  function onKeyPressUrlEncode(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      setResultUrlEncode("");
      e.preventDefault();
      setResultUrlEncode(encodeURIComponent(valueUrlEncode)); // TODO encodeURI version ?
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
      setResultUrlDecode(decodeURIComponent(valueUrlDecode)); // TODO decodeURI version ?
    }
  }

  const readonlyStyle = { width: "100%", backgroundColor: "white" };

  return (
    <div>
      <Header />
      <h1>URL</h1>
      <h2>encode: encodeURIComponent</h2>
      <input
        type="text"
        value={valueUrlEncode}
        onChange={onChangeUrlEncode}
        onKeyPress={onKeyPressUrlEncode}
        style={{ width: "100%" }}
      />{" "}
      <input readOnly value={resultUrlEncode} style={readonlyStyle} />
      <h2>decode: dencodeURIComponent</h2>
      <input
        type="text"
        value={valueUrlDecode}
        onChange={onChangeUrlDecode}
        onKeyPress={onKeyPressUrlDecode}
        style={{ width: "100%" }}
      />{" "}
      <input readOnly value={resultUrlDecode} style={readonlyStyle} />
    </div>
  );
}
