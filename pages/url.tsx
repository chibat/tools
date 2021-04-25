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
      <Header />
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
