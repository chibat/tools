import React, { useState } from "react";
import Header from "../components/Header.tsx";
import { defaultCharacters, generatePassword } from "../lib/password.ts";

export default function Home() {
  const [length, setLength] = useState(10);
  const [characters, setCharacters] = useState(defaultCharacters);
  const [result, setResult] = useState("");

  function onClick() {
    if (length && characters) {
      setResult(generatePassword(length, characters));
    }
  }

  const readonlyStyle = { width: "100%", backgroundColor: "white" };

  return (
    <div>
      <Header />
      <h1>Password Generator</h1>
      <div>
        password length{" "}
        <input
          type="number"
          value={length}
          onChange={(e: React.ChangeEvent<any>) => setLength(e.target.value)}
        />
      </div>
      <div>
        password characters{" "}
        <input
          type="text"
          value={characters}
          onChange={(e: React.ChangeEvent<any>) =>
            setCharacters(e.target.value)}
          style={{ width: "50%" }}
        />
      </div>
      <button onClick={onClick}>generate</button>
      <div>
        <input readOnly value={result} style={readonlyStyle} />
      </div>
    </div>
  );
}
